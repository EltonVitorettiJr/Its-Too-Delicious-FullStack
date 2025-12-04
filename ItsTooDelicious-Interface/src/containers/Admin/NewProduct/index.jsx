import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  CheckboxGroup,
  colourStyles,
  Container,
  Form,
  Input,
  InputGroup,
  Label,
  LabelUpload,
  Select,
  SubmitButton,
} from './styles';
import { ImageIcon } from '@phosphor-icons/react';
import { api } from '../../../services/api';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const schema = yup.object({
  name: yup.string().required('Digite o nome do produto'),
  price: yup
    .number()
    .positive('O preço do produto deve ser positivo')
    .required('Digite o preço do produto')
    .typeError('Digite o preço do produto'),
  category: yup.object().required('Selecione a categoria do produto'),
  offer: yup.bool(),
  file: yup
    .mixed()
    .test('required', 'Escolha uma imagem para o produto', (value) => {
      return value && value.length > 0;
    })
    .test(
      'fileSize',
      'Escolha uma imagem com menos de 3 Megabytes',
      (value) => {
        return value && value.length > 0 && value[0].size <= 3000000;
      },
    ),
});

export function NewProduct() {
  const [categories, setCategories] = useState([]);
  const [fileName, setFileName] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('/categories');

      setCategories(data);
    }

    loadCategories();
  }, []);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const productFormData = new FormData();

    productFormData.append('name', data.name);
    productFormData.append('price', data.price * 100);
    productFormData.append('category_id', data.category.id);
    productFormData.append('file', data.file[0]);
    productFormData.append('offer', data.offer);

    const toastID = await toast.promise(
      api.post('/products', productFormData),
      {
        pending: 'Adicionando produto...',
        success: 'Produto adicionado!',
        error: 'Falha ao adicionar produto, tente novamente.',
      },
    );

    if (toastID.status === 201) {
      setTimeout(() => {
        navigate('/admin/produtos');
      }, 2000);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <Label>Nome do Produto</Label>
          <Input type={'text'} {...register('name')} />
          <p>{errors?.name?.message}</p>
        </InputGroup>
        <InputGroup>
          <Label>Preço do Produto</Label>
          <Input type={'number'} {...register('price')} />
          <p>{errors?.price?.message}</p>
        </InputGroup>
        <InputGroup>
          <LabelUpload>
            <ImageIcon size={'22px'} />
            <input
              type="file"
              {...register('file')}
              accept="image/png, image/jpeg, image/svg"
              onChange={(value) => {
                setFileName(value?.target?.files[0].name);
                register('file').onChange(value);
              }}
            />
            {fileName || 'Upload da Foto do Produto'}
          </LabelUpload>
          <p>{errors?.file?.message}</p>
        </InputGroup>
        <InputGroup>
          <Label>Categoria do Produto</Label>

          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                styles={colourStyles}
                placeholder="Selecione uma categoria"
                menuPortalTarget={document.body}
                options={categories}
                getOptionLabel={(category) => category.name}
                getOptionValue={(category) => category.id}
              />
            )}
          />
          <p>{errors?.category?.message}</p>
        </InputGroup>
        <CheckboxGroup>
          <Input
            type="checkbox"
            className="offer-checkbox"
            {...register('offer')}
          />
          <Label>Produto em Oferta?</Label>
        </CheckboxGroup>
        <SubmitButton>Adicionar Produto</SubmitButton>
      </Form>
    </Container>
  );
}
