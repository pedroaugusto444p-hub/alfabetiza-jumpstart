import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  Brain,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Download,
  Eye,
  FileText,
  Heart,
  Layers3,
  LetterText,
  MousePointer2,
  PackageCheck,
  PencilLine,
  Printer,
  Puzzle,
  ShieldCheck,
  Sparkles,
  Star,
  Volume2,
} from "lucide-react";
import heroImage from "../assets/kit-primeiras-palavras-hero.jpg";
import activitiesImage from "../assets/atividades-preview.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kit Primeiras Palavras | Atividades de Alfabetização" },
      {
        name: "description",
        content:
          "Atividades progressivas para praticar letras, sons, sílabas e palavras em casa, de forma simples, visual e divertida.",
      },
      { property: "og:title", content: "Kit Primeiras Palavras" },
      {
        property: "og:description",
        content:
          "Um sistema simples de atividades para apoiar as primeiras etapas da alfabetização em casa.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const PRICE = "R$ 19,90";
const CHECKOUT_URL = "#oferta";

const quickBenefits = [
  "Atividades prontas e organizadas por habilidade",
  "Prática de letras, sons, sílabas e palavras",
  "Imprima somente o que quiser usar",
  "Momentos educativos longe das telas",
  "Você não precisa ser professor",
];

const situations = [
  "Reconhece algumas letras, mas ainda se confunde ao juntar os sons?",
  "Sabe dizer o alfabeto, mas formar uma palavra parece um salto grande demais?",
  "Perde o interesse quando a atividade é longa, repetitiva ou pouco visual?",
  "Você salva várias atividades gratuitas, mas não sabe qual usar primeiro?",
  "Quer ajudar em casa, porém fica com receio de ensinar do jeito errado?",
  "Gostaria de trocar alguns minutos de tela por uma atividade com propósito?",
];

const steps = [
  {
    number: "01",
    icon: PencilLine,
    title: "Grafismo e coordenação",
    text: "Traçados, caminhos e movimentos ajudam a criança a ganhar mais controle do lápis e segurança para registrar letras.",
    benefit: "Mais confiança para começar",
    color: "bg-coral-soft text-coral",
  },
  {
    number: "02",
    icon: Volume2,
    title: "Letras e sons",
    text: "Atividades visuais aproximam o formato das letras dos sons que aparecem nas palavras do dia a dia.",
    benefit: "Conexões que fazem sentido",
    color: "bg-sun-soft text-sun-deep",
  },
  {
    number: "03",
    icon: Puzzle,
    title: "Sílabas e combinações",
    text: "A criança começa a perceber como os sons se unem e pratica combinações de um jeito leve e progressivo.",
    benefit: "Um passo de cada vez",
    color: "bg-teal-soft text-teal",
  },
  {
    number: "04",
    icon: BookOpen,
    title: "Palavras e leitura inicial",
    text: "Com peças, imagens e desafios curtos, ela experimenta montar palavras e dar os primeiros passos na leitura.",
    benefit: "Prática com significado",
    color: "bg-blue-soft text-blue",
  },
];

const activities = [
  { title: "Grafismo", text: "Pratica movimentos e controle do lápis.", icon: PencilLine },
  { title: "Complete a sílaba", text: "Relaciona sons, imagens e combinações.", icon: Volume2 },
  { title: "Monte a palavra", text: "Organiza letras com apoio visual.", icon: Puzzle },
  { title: "Ligue figura e palavra", text: "Estimula reconhecimento e vocabulário.", icon: Eye },
  { title: "Atividade fonética", text: "Aproxima letras dos sons iniciais.", icon: LetterText },
];

const skills = [
  [PencilLine, "Coordenação motora"],
  [MousePointer2, "Grafismo"],
  [LetterText, "Reconhecimento de letras"],
  [Volume2, "Letras e sons"],
  [Layers3, "Sílabas"],
  [Puzzle, "Formação de palavras"],
  [Eye, "Percepção visual"],
  [Brain, "Atenção"],
  [Sparkles, "Vocabulário"],
  [BookOpen, "Leitura inicial"],
] as const;

const bonuses = [
  {
    label: "Produto principal",
    title: "Kit Primeiras Palavras",
    description: "O sistema progressivo com atividades de letras, sons, sílabas, palavras e leitura inicial.",
    benefit: "Tenha um caminho organizado para acompanhar diferentes etapas.",
    value: "R$ 47",
    icon: BookOpen,
  },
  {
    label: "Bônus 1",
    title: "Caderno de Grafismo Divertido",
    description: "Traçados, caminhos e formas para praticar movimentos importantes antes da escrita.",
    benefit: "Ajuda a preparar a coordenação de forma leve.",
    value: "R$ 17",
    icon: PencilLine,
  },
  {
    label: "Bônus 2",
    title: "Cartões de Sílabas",
    description: "Cartões para visualizar, combinar e brincar com diferentes famílias silábicas.",
    benefit: "Torna as combinações mais concretas e visuais.",
    value: "R$ 17",
    icon: Layers3,
  },
  {
    label: "Bônus 3",
    title: "Jogo Monte a Palavra",
    description: "Peças e desafios para organizar letras e construir palavras com apoio de imagens.",
    benefit: "Transforma a prática em uma pequena brincadeira.",
    value: "R$ 19",
    icon: Puzzle,
  },
  {
    label: "Bônus 4",
    title: "Desafios de Leitura",
    description: "Propostas curtas para crianças que já estão ensaiando suas primeiras leituras.",
    benefit: "Oferece novos desafios sem pular etapas.",
    value: "R$ 17",
    icon: BookOpen,
  },
  {
    label: "Bônus 5",
    title: "Atividades Educativas sem Tela",
    description: "Ideias simples para criar momentos de atenção, conversa e aprendizagem em casa.",
    benefit: "Mais opções para ocupar o tempo com propósito.",
    value: "R$ 19",
    icon: Heart,
  },
];

const faqs = [
  ["Meu filho é muito novo?", "O kit foi pensado para crianças em fase de pré-alfabetização e alfabetização. Como cada criança tem seu ritmo, escolha as propostas que combinam com o momento dela e avance aos poucos."],
  ["Preciso ser professor para usar?", "Não. As atividades são visuais, diretas e prontas para usar. Você acompanha a proposta e incentiva a criança, sem precisar preparar uma aula."],
  ["Preciso imprimir tudo de uma vez?", "Não. Você pode imprimir somente as páginas que deseja utilizar naquele dia ou naquela etapa."],
  ["É um produto físico?", "Não. O Kit Primeiras Palavras é um produto digital. Nenhum material impresso será enviado pelo correio."],
  ["Como eu recebo o material?", "O acesso digital é enviado após a confirmação do pagamento, para você baixar e utilizar os arquivos."],
  ["Posso usar pelo celular?", "Você pode acessar e visualizar os arquivos pelo celular. Para a criança realizar as atividades de escrita e recorte, recomendamos imprimir as páginas escolhidas."],
  ["Preciso seguir todas as atividades na ordem?", "Não. A progressão ajuda você a entender o caminho, mas é possível selecionar as atividades mais adequadas ao interesse e ao momento da criança."],
  ["Meu filho já conhece algumas letras. Ainda serve?", "Sim. Você pode começar pelas atividades de sons, sílabas ou formação de palavras e voltar às letras quando precisar reforçar algo."],
  ["Meu filho ainda não sabe ler. Serve?", "Sim. O material inclui habilidades que vêm antes da leitura, como grafismo, reconhecimento visual, letras, sons e sílabas."],
  ["O kit substitui a escola ou acompanhamento profissional?", "Não. Ele é um recurso complementar para praticar em casa e não substitui a escola nem orientações de profissionais quando necessárias."],
];

function Cta({ children = "QUERO ACESSAR O KIT AGORA", inverse = false }: { children?: React.ReactNode; inverse?: boolean }) {
  return (
    <a href={CHECKOUT_URL} className={`cta-button ${inverse ? "cta-inverse" : ""}`}>
      <span>{children}</span><ArrowRight aria-hidden="true" />
    </a>
  );
}

function SectionHeading({ eyebrow, title, copy, light = false }: { eyebrow?: string; title: React.ReactNode; copy?: string; light?: boolean }) {
  return (
    <div className="section-heading">
      {eyebrow && <p className={`eyebrow ${light ? "eyebrow-light" : ""}`}>{eyebrow}</p>}
      <h2 className={light ? "text-primary-foreground" : ""}>{title}</h2>
      {copy && <p className={light ? "text-primary-foreground/75" : "text-muted-foreground"}>{copy}</p>}
    </div>
  );
}

function Index() {
  return (
    <main className="overflow-hidden bg-background pb-20 text-foreground md:pb-0">
      <header className="hero-section">
        <nav className="page-shell flex items-center justify-between py-5" aria-label="Principal">
          <a href="#inicio" className="brand-mark" aria-label="Kit Primeiras Palavras — início">
            <span className="brand-icon">Aa</span>
            <span>Primeiras<br /><strong>Palavras</strong></span>
          </a>
          <a href="#oferta" className="nav-cta">Ver o kit <ArrowDown size={16} /></a>
        </nav>

        <div id="inicio" className="page-shell grid items-center gap-10 pb-16 pt-8 md:grid-cols-[1.03fr_.97fr] md:pb-24 md:pt-12">
          <div className="max-w-2xl">
            <p className="eyebrow"><Sparkles size={15} /> Para praticar em casa, com leveza</p>
            <h1>Ajude seu filho a dar sentido às letras — <span>um passo de cada vez.</span></h1>
            <p className="hero-copy">Um sistema simples e progressivo de atividades para praticar coordenação, letras, sons, sílabas e palavras de forma visual e divertida.</p>
            <ul className="hero-benefits">
              {quickBenefits.map((benefit) => <li key={benefit}><CheckCircle2 />{benefit}</li>)}
            </ul>
            <Cta />
            <p className="microcopy"><Download /> Acesso digital após a confirmação do pagamento · Garantia de 7 dias</p>
          </div>
          <div className="hero-visual">
            <div className="image-frame">
              <img src={heroImage} alt="Criança e responsável praticando letras, traçados e sílabas com atividades do kit" width={1408} height={1200} />
            </div>
            <div className="floating-note"><Heart fill="currentColor" /><span>Aprender também pode ser um momento de conexão.</span></div>
          </div>
        </div>
      </header>

      <section className="section problem-section">
        <div className="page-shell">
          <SectionHeading eyebrow="Isso acontece por aí?" title={<>Seu filho reconhece as letras… mas ainda tem dificuldade para <em>juntar tudo?</em></>} copy="Entre saber o nome de uma letra e conseguir formar uma palavra, existem pequenas habilidades que precisam de prática." />
          <div className="situation-grid">
            {situations.map((item, i) => <div className="situation" key={item}><span>0{i + 1}</span><p>{item}</p></div>)}
          </div>
          <p className="bridge-copy">Se você pensou <strong>“é exatamente assim aqui em casa”</strong>, saiba que não falta esforço. Muitas vezes, falta apenas um caminho claro para praticar.</p>
        </div>
      </section>

      <section className="section belief-section">
        <div className="page-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <SectionHeading eyebrow="A leitura é uma construção" title={<>Mais exercícios não significam, necessariamente, <em>mais clareza.</em></>} copy="Antes de pedir que uma criança leia uma palavra, vale ajudá-la a construir as habilidades que tornam essa leitura possível. Sem pressa. Sem transformar a casa em uma sala de aula." />
          <div className="progress-path" aria-label="Progressão das habilidades">
            {["Traçar", "Reconhecer sons", "Formar sílabas", "Montar palavras", "Avançar para a leitura"].map((label, i) => (
              <div className="path-step" key={label}><span>{i + 1}</span><strong>{label}</strong>{i < 4 && <ArrowRight />}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section solution-section">
        <div className="page-shell grid gap-10 md:grid-cols-2 md:items-center">
          <div className="solution-art" aria-hidden="true">
            <div className="paper paper-back"><span>BA · BE · BI · BO · BU</span></div>
            <div className="paper paper-front"><span className="paper-kicker">KIT</span><strong>PRIMEIRAS<br />PALAVRAS</strong><div className="paper-shapes"><i>A</i><i>BA</i><i>CASA</i></div></div>
          </div>
          <div>
            <p className="eyebrow">Uma solução prática para a rotina real</p>
            <h2>Apresentamos o <em>Kit Primeiras Palavras</em></h2>
            <p className="lead">Um conjunto organizado de atividades para você utilizar em casa — sem inventar exercícios e sem passar horas procurando materiais espalhados pela internet.</p>
            <p>Em vez de escolher uma folha aleatória a cada dia, você tem propostas que acompanham diferentes etapas: do controle do lápis às primeiras experiências com palavras.</p>
            <div className="soft-callout"><PackageCheck /><span><strong>Não é apenas um PDF de atividades.</strong> É uma sequência simples para saber o que praticar agora e quais possibilidades explorar depois.</span></div>
            <Cta>QUERO CONHECER O KIT</Cta>
          </div>
        </div>
      </section>

      <section className="section method-section">
        <div className="page-shell">
          <SectionHeading eyebrow="O caminho dentro do kit" title={<>Quatro etapas simples para praticar <em>sem pular a base.</em></>} copy="Cada grupo de atividades tem um propósito claro e prepara o terreno para o próximo." />
          <div className="steps-grid">
            {steps.map(({ icon: Icon, ...step }) => (
              <article className="step-card" key={step.number}>
                <div className="step-top"><span className={`step-icon ${step.color}`}><Icon /></span><span className="step-number">{step.number}</span></div>
                <h3>{step.title}</h3><p>{step.text}</p><strong><Check />{step.benefit}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section activities-section">
        <div className="page-shell">
          <SectionHeading eyebrow="Do papel para a prática" title={<>Veja algumas atividades que seu filho <em>poderá praticar</em></>} copy="Propostas curtas, visuais e variadas para favorecer a participação e o interesse." />
          <div className="activities-image"><img src={activitiesImage} alt="Exemplos de atividades de grafismo, letras, sílabas, formação e associação de palavras" loading="lazy" width={1600} height={1008} /><span className="image-label">Exemplos ilustrativos do material</span></div>
          <div className="activity-captions">
            {activities.map(({ icon: Icon, title, text }) => <article key={title}><Icon /><div><h3>{title}</h3><p>{text}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="section parent-section">
        <div className="page-shell parent-inner">
          <div>
            <p className="eyebrow eyebrow-light">Feito para pais e responsáveis</p>
            <h2 className="text-primary-foreground">Você não precisa ser professor para usar.</h2>
            <p>Você não precisa montar aula, estudar métodos ou preparar tudo com antecedência. Escolha uma atividade, imprima e acompanhe a criança por alguns minutos.</p>
          </div>
          <ul>
            <li><Check />Atividades prontas e fáceis de entender</li>
            <li><Check />Imprima apenas o que precisar</li>
            <li><Check />Poucos minutos para organizar</li>
            <li><Check />Use no seu ritmo e na sua rotina</li>
            <li><Check />Chega de pesquisar uma atividade nova todo dia</li>
          </ul>
        </div>
      </section>

      <section className="section skills-section">
        <div className="page-shell">
          <SectionHeading eyebrow="Aprendizagem em várias frentes" title={<>Habilidades importantes, praticadas de forma <em>integrada.</em></>} copy="O kit oferece oportunidades de prática. O desenvolvimento acontece no ritmo de cada criança, com repetição, acolhimento e acompanhamento." />
          <div className="skills-grid">
            {skills.map(([Icon, label]) => <div key={label}><span><Icon /></span><strong>{label}</strong></div>)}
          </div>
        </div>
      </section>

      <section className="section offer-stack-section">
        <div className="page-shell">
          <SectionHeading eyebrow="Tudo o que você recebe" title={<>Não é uma atividade solta. É uma <em>caixa de possibilidades.</em></>} copy="O kit principal e cinco bônus para variar a prática e acompanhar diferentes momentos." />
          <div className="bonus-list">
            {bonuses.map(({ icon: Icon, ...item }, index) => (
              <article className={`bonus-card ${index === 0 ? "bonus-featured" : ""}`} key={item.title}>
                <div className="bonus-mockup"><Icon /><span>[ MOCKUP DO {index === 0 ? "KIT" : "BÔNUS"} ]</span></div>
                <div className="bonus-copy"><p className="bonus-label">{item.label}</p><h3>{item.title}</h3><p>{item.description}</p><strong><Star fill="currentColor" />{item.benefit}</strong></div>
                <div className="bonus-value"><small>Valor percebido</small><b>{item.value}</b></div>
              </article>
            ))}
          </div>
          <div className="testimonial-placeholder"><Heart /><div><strong>[ INSERIR DEPOIMENTO REAL AQUI ]</strong><span>[ INSERIR PRINT REAL DE CLIENTE AQUI ]</span></div></div>
        </div>
      </section>

      <section id="oferta" className="section price-section">
        <div className="page-shell price-layout">
          <div className="price-context">
            <p className="eyebrow">Uma biblioteca pronta para usar</p>
            <h2>Se cada material fosse adquirido separadamente…</h2>
            <div className="price-lines">
              {bonuses.map((item) => <div key={item.title}><span>{item.title}</span><strong>{item.value}</strong></div>)}
            </div>
            <div className="total-line"><span>Valor total percebido</span><strong>R$ 136</strong></div>
          </div>
          <div className="checkout-card">
            <span className="offer-tag">Condição promocional atual</span>
            <p className="not-price">Mas você não vai pagar <s>R$ 136</s></p>
            <p className="today-label">Acesse hoje por apenas</p>
            <div className="main-price"><small>R$</small><strong>19</strong><div><b>,90</b><span>pagamento único</span></div></div>
            <a href={CHECKOUT_URL} className="cta-button checkout-button"><span>QUERO ACESSAR O KIT</span><ArrowRight /></a>
            <ul><li><Download />Acesso digital</li><li><Clock3 />Envio após o pagamento</li><li><ShieldCheck />Garantia de 7 dias</li></ul>
            <p className="future-price">Esta condição pode ser atualizada futuramente, sem contagem regressiva ou urgência artificial.</p>
          </div>
        </div>
      </section>

      <section className="section why-price-section">
        <div className="page-shell why-price-inner">
          <div className="why-icon"><Download /></div>
          <div><p className="eyebrow">Por que o valor é acessível?</p><h2>Digital por escolha. Acessível por propósito.</h2><p>Como o material é digital, não existem custos de impressão, estoque, embalagem ou frete. Isso permite oferecer o kit por um valor menor e facilitar o acesso de mais famílias.</p></div>
          <div className="digital-points"><span><FileText />Arquivos digitais</span><span><Printer />Você imprime em casa</span><span><PackageCheck />Sem frete ou estoque</span></div>
        </div>
      </section>

      <section className="section guarantee-section">
        <div className="page-shell guarantee-inner">
          <div className="guarantee-seal"><ShieldCheck /><strong>7 DIAS</strong><span>DE GARANTIA</span></div>
          <div><p className="eyebrow">Seu risco é menor</p><h2>Conheça o material com tranquilidade.</h2><p>Após a compra, você tem <strong>7 dias de garantia</strong>. Se dentro desse período entender que o Kit Primeiras Palavras não faz sentido para sua família, solicite o reembolso conforme as condições da plataforma de pagamento.</p><p className="legal-note">Sem selo inventado, sem promessa escondida: uma garantia simples e direta.</p></div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="page-shell faq-layout">
          <div className="faq-intro"><p className="eyebrow">Antes de decidir</p><h2>Dúvidas comuns, respostas diretas.</h2><p>Veja se o kit combina com o momento da sua família.</p><Cta>TENHO INTERESSE NO KIT</Cta></div>
          <div className="faq-list">
            {faqs.map(([question, answer], i) => <details key={question} open={i === 0}><summary><span>{question}</span><ChevronDown /></summary><p>{answer}</p></details>)}
          </div>
        </div>
      </section>

      <section className="section closing-section">
        <div className="page-shell closing-inner">
          <p className="eyebrow eyebrow-light">Um pequeno momento que cabe na rotina</p>
          <h2>Imagine transformar alguns minutos do dia em um momento divertido de aprendizado <em>com seu filho.</em></h2>
          <p>Sem cobrança para fazer tudo. Sem a obrigação de acertar sempre. Apenas uma atividade pronta, sua presença e a chance de celebrar cada pequena descoberta.</p>
          <div className="closing-quote"><Heart fill="currentColor" /><span>Porque, quando o caminho fica mais simples, sobra mais espaço para encorajar, brincar e aprender juntos.</span></div>
        </div>
      </section>

      <section className="section final-offer-section">
        <div className="page-shell final-offer">
          <div><p className="eyebrow">Comece com o próximo passo</p><h2>Tenha atividades prontas para acompanhar as primeiras descobertas da leitura.</h2><ul>{["Kit principal + 5 bônus", "Acesso digital após a confirmação", "Imprima somente o necessário", "7 dias de garantia"].map(x => <li key={x}><CheckCircle2 />{x}</li>)}</ul></div>
          <div className="final-buy"><span>Oferta completa</span><s>Valor percebido: R$ 136</s><p>Por <strong>{PRICE}</strong></p><Cta>QUERO ACESSAR O KIT PRIMEIRAS PALAVRAS</Cta><small>Pagamento único · Produto digital · Garantia de 7 dias</small></div>
        </div>
      </section>

      <section className="implementation-section">
        <div className="page-shell">
          <div className="implementation-head"><p className="eyebrow">Banco de conversão</p><h2>Variações e próximos produtos</h2><p>Opções prontas para testes de anúncio, checkout e evolução da oferta.</p></div>
          <div className="implementation-grid">
            <article><h3>5 headlines para testar</h3><ol><li>Ajude seu filho a transformar letras soltas em descobertas que fazem sentido.</li><li>Do primeiro traço às primeiras palavras: um caminho simples para praticar em casa.</li><li>Atividades prontas para seu filho praticar letras, sons, sílabas e palavras.</li><li>Menos tempo procurando atividades. Mais momentos aprendendo juntos.</li><li>As habilidades que vêm antes e durante a leitura, organizadas passo a passo.</li></ol></article>
            <article><h3>5 opções de CTA</h3><ol><li>Quero acessar o Kit agora</li><li>Quero praticar com meu filho</li><li>Quero atividades prontas em casa</li><li>Quero começar pelas primeiras palavras</li><li>Quero o Kit + todos os bônus</li></ol></article>
            <article><h3>3 opções de nome</h3><ol><li>Kit Primeiras Palavras</li><li>Caminho das Letras</li><li>Descobrindo Palavras</li></ol><h3 className="mt-6">3 opções de subtítulo</h3><ol><li>Atividades progressivas do traço à leitura inicial.</li><li>Um caminho visual para praticar letras, sons e palavras.</li><li>Pequenas atividades para grandes descobertas.</li></ol></article>
            <article><h3>3 ideias de order bump</h3><ol><li><strong>Alfabeto de Parede:</strong> cartazes ilustrados para consulta visual.</li><li><strong>Rotina de 15 Minutos:</strong> calendário de prática para 30 dias.</li><li><strong>Kit Reutilizável:</strong> guia para plastificar e repetir atividades.</li></ol></article>
            <article><h3>3 ideias de upsell</h3><ol><li><strong>Clube de Atividades:</strong> novos materiais mensais por habilidade.</li><li><strong>Matemática Divertida:</strong> números, quantidades e operações iniciais.</li><li><strong>Biblioteca de Leitura:</strong> histórias curtas e atividades de compreensão.</li></ol></article>
            <article><h3>Estrutura para implementação</h3><ol><li>Headline + benefícios + CTA + imagem do uso</li><li>Identificação + quebra de crença</li><li>Solução + método em 4 etapas</li><li>Demonstração + facilidade + habilidades</li><li>Kit e bônus + prova social real</li><li>Ancoragem + preço + justificativa</li><li>Garantia + FAQ + fechamento + CTA</li></ol></article>
          </div>
        </div>
      </section>

      <footer><div className="page-shell"><div className="brand-mark"><span className="brand-icon">Aa</span><span>Primeiras <strong>Palavras</strong></span></div><p>Material educativo complementar para uso familiar.</p><p>© 2026 Kit Primeiras Palavras. Todos os direitos reservados.</p></div></footer>

      <div className="mobile-buy-bar"><div><span>Acesso completo</span><strong>{PRICE}</strong></div><a href="#oferta">QUERO O KIT <ArrowRight /></a></div>
    </main>
  );
}
