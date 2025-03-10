import { useState } from "react";
import "./App.css";

const filmes = [
  {
    id: 1,
    nome: "Homem Aranha",
    genero: "ação",
    imagem:
      "https://upload.wikimedia.org/wikipedia/pt/thumb/1/14/Spide-Man_Poster.jpg/250px-Spide-Man_Poster.jpg",
    checked: false,
  },
  {
    id: 2,
    nome: "Super Marios Bros. - O Filme",
    genero: "animação",
    imagem:
      "https://upload.wikimedia.org/wikipedia/pt/4/44/The_Super_Mario_Bros._Movie_poster.jpg",
    checked: false,
  },
  {
    id: 3,
    nome: "Luther: O Cair da Noite",
    genero: "drama",
    imagem:
      "https://media.fstatic.com/87P3OkthYv-KtfdxMSwqH-eSB2g=/322x478/smart/filters:format(webp)/media/movies/covers/2023/01/321313250_699300278290829_1479258747461748433_n.jpg",
    checked: false,
  },
  {
    id: 4,
    nome: "O Beco do Pesadelo",
    genero: "suspense",
    imagem: "https://br.web.img3.acsta.net/pictures/21/11/22/17/54/4745407.jpg",
    checked: false,
  },
  {
    id: 5,
    nome: "Guardiães da Galáxia",
    genero: "aventura",
    imagem:
      "https://upload.wikimedia.org/wikipedia/pt/b/b2/Guardiansgalaxyposter.jpg",
    checked: false,
  },
  {
    id: 6,
    nome: "Tudo em Todo o Lugar ao Mesmo Tempo",
    genero: "comédia",
    imagem:
      "https://cinepop.com.br/wp-content/uploads/2022/06/tudoemtodolugar_2.jpg",
    checked: false,
  },
];

function App() {
  const [filmesState, setFilmesState] = useState(filmes);
  const [filmeSelecionado, setFilmeSelecionado] = useState("");

  const handleCheckboxChange = (id) => {
    const novosFilmes = filmesState.map((filme) =>
      filme.id === id ? { ...filme, checked: !filme.checked } : filme
    );
    setFilmesState(novosFilmes);

    const filme = novosFilmes.find((f) => f.id === id);
    if (filme.checked) {
      setFilmeSelecionado(`Filme selecionado: ${filme.nome}`);
    } else {
      setFilmeSelecionado("");
    }
  };

  return (
    <div className="p-4">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">Imagem</th>
            <th className="border border-gray-300 p-2">Nome</th>
            <th className="border border-gray-300 p-2">Gênero</th>
            <th className="border border-gray-300 p-2">Selecionar</th>
          </tr>
        </thead>
        <tbody>
          {filmesState.map((filme) => (
            <tr key={filme.id} className="text-center">
              <td className="border border-gray-300 p-2">
                <img
                  src={filme.imagem}
                  alt={filme.nome}
                  className="h-20 mx-auto"
                />
              </td>
              <td className="border border-gray-300 p-2">{filme.nome}</td>
              <td className="border border-gray-300 p-2">{filme.genero}</td>
              <td className="border border-gray-300 p-2">
                <input
                  type="checkbox"
                  checked={filme.checked}
                  onChange={() => handleCheckboxChange(filme.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {filmeSelecionado && <p>{filmeSelecionado}</p>}
    </div>
  );
}

export default App;
