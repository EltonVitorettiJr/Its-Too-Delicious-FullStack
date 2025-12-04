import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { api } from '../../services/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../hooks/UserContext';

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

export function Login() {
  const navigate = useNavigate();
  const { putUserData } = useUser();

  const schema = Yup.object({
    email: Yup.string()
      .email('Coloque um email válido.')
      .required('O email é obrigatório.'),
    password: Yup.string()
      .min(6, 'Coloque uma senha com mais de 6 caracteres.')
      .required('Coloque uma senha.'),
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
      toastID = toast.loading('Validando dados...');

      const { status, data: userData } = await api.post(
        '/session',
        {
          email: data.email,
          password: data.password,
        },
        {
          validateStatus: () => true,
        },
      );

      putUserData(userData);

      switch (status) {
        case 200:
        case 201:
          setTimeout(() => {
            if (userData.admin) {
              navigate('/admin/pedidos');
            } else {
              navigate('/');
            }
          }, 2000);
          toast.update(toastID, {
            render: 'Login realizado com sucesso!',
            type: 'success',
            isLoading: false,
            autoClose: 2000,
          });
          break;
        case 401:
          toast.update(toastID, {
            render: 'Tenha certeza de que os dados estão corretos!',
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
        <Subtitle>
          Olá, seja bem vindo ao <span>It's Too Delicious!</span>
          <br /> Acesse com seu <span>Login e senha.</span>
        </Subtitle>
        <Form onSubmit={handleSubmit(onSubmit)}>
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
          <Button type="submit">Entrar</Button>
        </Form>
        <p>
          Não possui conta?&nbsp;<Link to="/cadastro">Clique aqui.</Link>
        </p>
      </RightContainer>
    </Container>
  );
}
