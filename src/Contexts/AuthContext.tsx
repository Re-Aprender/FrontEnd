import { createContext, ReactNode, useState } from "react"

import UsuarioLogin from "../models/UsuarioLogin"
import { login } from "../services/Service"
import { toastAlerta } from "../util/toastAlerta"
import Livro from "../models/Livro"
// import { toastAlerta } from "../utils/toastAlerta"

interface AuthContextProps {
    usuario: UsuarioLogin
    handleLogout(): void
    handleLogin(usuario: UsuarioLogin): Promise<void>
    isLoading: boolean
    isCarrinho: boolean
    setIsCarrinho(change: boolean):void
    setIsLoading(carregando: boolean): void
    carrinho: Livro[]
    removerDoCarrinho(id: number): void
    adicionarNoCarrinho(livro: Livro): void
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {

    const [usuario, setUsuario] = useState<UsuarioLogin>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
        token: ""
    })

    const [isLoading, setIsLoading] = useState(false)
    const [isCarrinho, setIsCarrinho] = useState(false)
    const [carrinho , setCarrinho] = useState<Livro[]>([])
    
    function adicionarNoCarrinho(livro: Livro) {
        let lista = [...carrinho];
        const livroExistente = lista.find(item => item.id === livro.id);
        if (!livroExistente) {
            lista.push(livro);
            setCarrinho(lista);
        }
        console.log(lista);
    }

    function removerDoCarrinho(id: number){
        let lista = [...carrinho].filter(livro => livro.id !== id);
        setCarrinho(lista)
    }

    async function handleLogin(userLogin: UsuarioLogin) {
        setIsLoading(true)
        try {
            await login(`/usuarios/logar`, userLogin, setUsuario)
            toastAlerta("Usuário logado com sucesso", "sucesso")
            setIsLoading(false)

        } catch (error) {
            console.log(error)
            toastAlerta("Dados de usuário inconsistentes", "erro")
            setIsLoading(false)
        }
    }

    function handleLogout() {
        setUsuario({
            id: 0,
            nome: "",
            usuario: "",
            senha: "",
            foto: "",
            token: ""
        })
    }

    return (
        <AuthContext.Provider value={{ usuario, handleLogin, handleLogout, isLoading, setIsLoading, isCarrinho, setIsCarrinho, carrinho, adicionarNoCarrinho, removerDoCarrinho }}>
            {children}
        </AuthContext.Provider>
    )
}