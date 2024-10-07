import { FiDownload} from 'react-icons/fi';

function Resume() {

  return (
    <section id="resume" className="p-8 mt-12 min-h-screen bg-gradient-to-br from-gray-200 to-gray-400 flex flex-col items-center">
      <div className="text-center mb-6">
        <h2 className="text-5xl font-extrabold bg-clip-text text-blue-600">
          Curriculum
        </h2>
        <p className="mt-2 text-lg text-gray-700">Download the resume below</p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mt-6 w-full max-w-4xl text-left text-gray-800">
        <h3 className="text-2xl font-semibold mb-4">Dados Pessoais</h3>
        <p className="mb-6">
          Douglas Soares de Oliveira <br />
          Brasileiro | 30 anos <br />
          Porto Alegre – RS <br />
          (51) 99127-1930 <br />
          soares.douglas.oliveira@hotmail.com.br <br/>
        </p>

        <h3 className="text-2xl font-semibold mb-4">Objetivo</h3>
        <p className="mb-6">
          Utilizar a tecnologia para transformar e otimizar processos em diversos setores, impulsionando a produtividade de maneira sustentável e inovadora. Tenho o compromisso de equilibrar minha carreira com um constante aprendizado, buscando gerar impacto positivo na vida das pessoas e contribuir para um futuro mais eficiente, conectado e orientado por soluções tecnológicas.
        </p>

        <h3 className="text-2xl font-semibold mb-4">Educação</h3>
        <ul className="mb-6">
          <li><strong>Pós-graduação/Especialização - Coding & Tech Journey from User to Creator</strong> | 2024 | FIAP</li>
          <li><strong>Tecnólogo em Análise e Desenvolvimento de Sistemas</strong> | 2023 | UNINTER</li>
          <li><strong>Bacharel em Zootecnia</strong> | 2019 | UFRGS</li>
        </ul>

        <h3 className="text-2xl font-semibold mb-4">Experiência</h3>
        <div className="mb-6">
          <h4 className="text-xl font-bold">Help Desk - Vipes do Brasil</h4>
          <p className="text-gray-600">Dezembro 2023 - Agosto 2024</p>
          <ul className="list-disc pl-5 mt-2 mb-4">
            <li>Configuração e manutenção de redes locais...</li>
            <li>Gerenciamento da configuração e manutenção de roteadores e switches...</li>
            <li>Implementação de BPMN, processos e SOPs...</li>
            <li>Configuração, manutenção e suporte para desktops e laptops...</li>
            <li>Diagnóstico e resolução de problemas de hardware...</li>
            <li>Suporte para dispositivos móveis...</li>
            <li>Configuração de políticas de segurança para dispositivos móveis...</li>
            <li>Assistência em marketing digital...</li>
          </ul>

          <h4 className="text-xl font-bold">Estágio - Cargill</h4>
          <p className="text-gray-600">Agosto 2021 - Agosto de 2023</p>
          <ul className="list-disc pl-5 mt-2 mb-4">
            <li>Compilação, análise e processamento de dados para uso em ferramentas de BI...</li>
            <li>Criação e automação de ferramentas e processos usando Power Automate, VBA e Power Apps...</li>
            <li>Desenvolvimento de relatórios gerenciais...</li>
            <li>Gestão de projetos...</li>
            <li>Desenvolvimento de fluxos de trabalho usando software Fluig, HTML, CSS e JavaScript...</li>
            <li>Suporte remoto ao cliente e representante...</li>
            <li>Auxílio no desenvolvimento e análise do Feed Manager...</li>
            <li>Fornecendo suporte à equipe com SQL, Access e VBA...</li>
          </ul>

          <h4 className="text-xl font-bold">Estágio - Fazenda La Delfina</h4>
          <p className="text-gray-600">Julho - Outubro de 2019</p>
          <ul className="list-disc pl-5 mt-2 mb-4">
            <li>Gestão de búfalas leiteiras no campo e cuidados com recém-nascidos;</li>
            <li>Auditoria no processamento de pedidos;</li>
            <li>Monitorar o cumprimento do Bem-estar Animal;</li>
            <li>Produção, controle de qualidade, logística, distribuição e armazenamento na produção de queijos e iogurtes;</li>
            <li>Aprimorar língua estrangeira (espanhol).</li>
          </ul>

          <h4 className="text-xl font-bold">Auxiliar Administrativo - Dondoni Contabilidade</h4>
          <p className="text-gray-600">Março - Agosto de 2012</p>
          <ul className="list-disc pl-5 mt-2 mb-4">
            <li>Organização do arquivo, rotinas de bancos e repartições públicas;</li>
            <li>Apoio administrativo (atender clientes, fazer pedidos, compra de materiais entre outros);</li>
            <li>Atualizar softwares e sistemas operacionais;</li>
            <li>Implementação e coordenação do programa 5S.</li>
          </ul>
        </div>

        <h3 className="text-2xl font-semibold mb-4">Cursos e Idiomas</h3>
        <ul className="mb-6 list-disc pl-5">
          <li>Espanhol: Intercâmbio na Argentina - 2019 | Nível: Fluente</li>
          <li>Inglês: Aulas em andamento / SENAC-RS | Nível: Intermediário</li>
          <li>Treinamento Lean Six Sigma (2022) | Realizado pela Cargill</li>
          <li>Power BI para Data Science (2023) | Data Science Academy</li>
          <li>Python (em andamento) | Udemy</li>
        </ul>

        <h3 className="text-2xl font-semibold mb-4">Conhecimentos Adicionais</h3>
        <ul className="mb-6 list-disc pl-5">
          <li>Python</li>
          <li>Power Apps</li>
          <li>Power Automate</li>
          <li>Power BI</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>VBA</li>
        </ul>

        <div className="text-center mt-8">
          <a
            href="/curriculo_douglas_soares.pdf"
            download="Curriculo_Douglas_Soares.pdf"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-blue-700 transition-transform duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
            rel="noopener noreferrer"
          >
            <FiDownload className="mr-3" size={24} />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;
