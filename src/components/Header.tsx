import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className='p-4'>
            <Link to="/" className='mx-4 p-2 border border-black'>Cadastrar aluno</Link>
            <Link to="#" className='mx-4 p-2 border border-black'>Ver lista de alunos</Link>
        </header>
    )
}