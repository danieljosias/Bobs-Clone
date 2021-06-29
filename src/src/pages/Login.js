import styled from 'styled-components';
import Api from '../Api';

let ColorTitle = "#5ce1e6";
let ColorInput = "#5ce1e6";
let ColorButton = "#000";
let ColorButtonHover = "#5ce1e6";

function login({onReceiveGoogle}) {

    const actionLoginGoogle = async () =>{
        let result = await Api.googleLogar();

        if(result){
            onReceiveGoogle(result.user);
        }else{
            alert('Error')
        }
    }

    return (
        <Login>
            <LoginTitle>Bob's</LoginTitle>

                <Form>
                    <Input type="text"  placeholder="E-mail" />
                    <br/>
                    
                    <Input type="password" placeholder="Senha" />
                    <br/>
                </Form>
                
                <ContainerBtn>
                    <LoginBtn>Logar</LoginBtn>
                </ContainerBtn>
                    
                <ContainerLink>
                    <Link onClick={actionLoginGoogle}>Fazer login com o Google?</Link>
                </ContainerLink>
        </Login>

    )
}

export default login;

const Login = styled.div`
    height:100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: rgba(240,240,240,240);
`
const LoginTitle = styled.h1`
    color:${ColorTitle};
`
const Form = styled.form`

`
const Input = styled.input`
    font-size: 14pt; 
    margin-bottom: 10px;
    
    &:focus{
        color:${ColorInput}
    }
`
const ContainerBtn = styled.div`

`
const LoginBtn = styled.button`
    width: 224px;
    background-color:${ColorButton};
    color:white;
    cursor: pointer;
    font-weight: bold;
    font-size: 14pt;

    &:hover{
        background-color: ${ColorButtonHover};
        transition: ease-in .3s;
    }
`
const ContainerLink = styled.div`
    margin-top: 10px;
`
const Link = styled.a`
    cursor: pointer;
    
    &:hover{
        text-decoration: underline;
    }
`
