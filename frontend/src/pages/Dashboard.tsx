import {useState, useEffect} from 'react'
import {uploadFile } from '../api/api'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
    const [file, setFile] = useState<File | null>(null)
    const [summary , setSummary] = useState<string>('')
    const [error, setError] = useState<string>('')
    const [format , setFormat] = useState<string>('text')
    const [username, setUsername] = useState<string>('')
    const navigate = useNavigate()
    const token = localStorage.getItem('token') || ''

    useEffect(() => {
        if (!token) {
            navigate('/login')
        }else{
            setUsername(localStorage.getItem('username') || '')
        }
    }, [])

    const handleUpload = async() =>{
        if(!file) return;
        try{
            const data = await uploadFile(file, token);
            let finalSummary = data.summary;

            if (format === 'tableau'){
                finalSummary = finalSummary.split("").map((s,i)=>`${i+1}. ${s}`).join("\n");
            }else if(format === 'carte'){
                finalSummary = finalSummary
                .split(". ")
                .map((s: string) => `. ${s.trim()}`)
                .join("\n");
            }
            setSummary(finalSummary);
        }catch(err){
            if (err && typeof err === 'object' && 'response' in err && err.response && typeof err.response === 'object' && 'data' in err.response && err.response.data && typeof err.response.data === 'object' && 'detail' in err.response.data) {
                setError((err as any).response.data.detail);
            } else {
                setError('Erreur lors de l\'upload du fichier');
            }
        }
    }

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        navigate('/login');
    }

    return (
        <div className='min-h-screen flex flex-col items-center p-6 bg-gray-100'>
            <div className="flex justify-between w-full max-w-4xl mb-6">
                <h1 className="text-3xl font-bold text-blue-700">Bienvenue, {username}</h1>
                <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200">Déconnexion</button>
            </div>
            <div className="w-full max-w-4xl bg-white p-6 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-semibold mb-4 text-blue-600">Télécharger un document</h2>
                {error && <div className="mb-4 p-3 bg-red-100 text-red-700 border border-red-300 rounded">{error}</div>}
                <input 
                    type="file" 
                    accept=".pdf,.docx,.txt,.pptx,.xlsx,.xls" 
                    onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
                />

                <label className="block mt-4 mb-2 font-medium text-gray-700">Format de sortie :</label>
                <select 
                    value={format}
                    onChange={(e) => setFormat(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out"
                >
                    <option value="text">Texte</option>
                    <option value="tableau">Tableau résumé</option>
                    <option value="carte">Carte mentale</option>
                </select>
                <button 
                    onClick={handleUpload} 
                    className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                >
                    Télécharger et Analyser
                </button>
                {summary && (
                    <div className="mt-6">
                        <h3 className="text-xl font-semibold mb-2 text-blue-600">Résumé généré :</h3>
                        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto whitespace-pre-wrap">{summary}</pre>
                    </div>
                )}
            </div>
        </div>
    )
}