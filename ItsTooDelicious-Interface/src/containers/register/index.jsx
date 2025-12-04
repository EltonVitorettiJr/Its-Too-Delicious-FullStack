import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { api } from '../../services/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import {
  Container,
  Form,
  LeftContainer,
  RightContainer,
  Subtitle,
  InputContainer,
  Mask,
  Link,
} from './styles';
import Logo from '../../assets/Logo.svg';
import { Button } from '../../components';

export function Register() {
  const navigate = useNavigate();
  const schema = Yup.object({
    name: Yup.string().required('O nome é obrigatório'),
    email: Yup.string()
      .email('Coloque um email válido.')
      .required('O email é obrigatório.'),
    password: Yup.string()
      .min(6, 'Coloque uma senha com mais de 6 caracteres.')
      .required('Coloque uma senha.'),
    confirmPassword: Yup.string()
      .required()
      .oneOf([Yup.ref('password')], 'Confirme sua senha.'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    let toastID = null;
    try {
      toastID = toast.loading('Cadastrando...');
      const { status } = await api.post(
        '/users',
        {
          name: data.name,
          email: data.email,
          password: data.password,
        },
        {
          validateStatus: () => true,
        },
      );
      switch (status) {
        case 200:
        case 201:
          setTimeout(() => {
            navigate('/login');
            return toast.update(toastID, {
              render: 'Cadastro realizado com sucesso!',
              type: 'success',
              isLoading: false,
              autoClose: 2000,
            });
          }, 2000);
          break;
        case 409:
          toast.update(toastID, {
            render: 'Esse email já existe, faça o login!',
            type: 'error',
            isLoading: false,
            autoClose: 3000,
          });
          break;
        default:
          throw new Error();
      }
    } catch (error) {
      toast.update(toastID, {
        render: 'Falha no servidor, tente novamente...',
        type: 'error',
        isLoading: false,
        autoClose: 3000,
      });
    }
  };

  return (
    <Container>
      <Mask></Mask>
      <LeftContainer>
        <img src={Logo} alt="logo-itstoodelicious" />
      </LeftContainer>
      <RightContainer>
        <Subtitle>Criar conta</Subtitle>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Nome</label>
            <input
              type="text"
              placeholder="Digite seu nome"
              {...register('name')}
            />
            <p>{errors?.name?.message}</p>
          </InputContainer>

          <InputContainer>
            <label>Email</label>
            <input
              type="email"
              placeholder="Digite seu email"
              {...register('email')}
            />
            <p>{errors?.email?.message}</p>
          </InputContainer>

          <InputContainer>
            <label>Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              {...register('password')}
            />
            <p>{errors?.password?.message}</p>
          </InputContainer>

          <InputContainer>
            <label>Confirmar Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              {...register('confirmPassword')}
            />
            <p>{errors?.confirmPassword?.message}</p>
          </InputContainer>
          <Button type="submit">Cadastrar</Button>
        </Form>
        <p>
          Já possui conta? <Link to="/login">Clique aqui.</Link>
        </p>
      </RightContainer>
    </Container>
  );
}
