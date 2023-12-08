import { UserOnLocalStorage } from "./user.js"
import { userFactory } from "../../../factories/user.js"

class SeedGenerator {
  getNamesAndEmails() {
    return [
      {
        name: "Ana Silva",
        email: "anasilva@email.com",
        phoneNumber: "3165842454",
        state: "Minas Gerais",
        state_abbr: "MG",
        city: "Belo Horizonte"
      },
      {
        name: "Carlos Oliveira",
        email: "carlosoliveira@email.com",
        phoneNumber: "3125146584",
        state: "Minas Gerais",
        state_abbr: "MG",
        city: "Belo Horizonte"
      },
      {
        name: "Amanda Santos",
        email: "amandasantos@email.com",
        phoneNumber: "3184756151",
        state: "Minas Gerais",
        state_abbr: "MG",
        city: "Belo Horizonte"
      },
      {
        name: "Bruno Lima",
        email: "brunolima@email.com",
        phoneNumber: "3152146131",
        state: "Minas Gerais",
        state_abbr: "MG",
        city: "Belo Horizonte"
      },
      {
        name: "Camila Costa",
        email: "camilacosta@email.com",
        phoneNumber: "1151416253",
        state: "São Paulo",
        state_abbr: "SP",
        city: "Jundiai"
      },
      {
        name: "Diego Pereira",
        email: "dieagopareira@email.com",
        phoneNumber: "1121418151",
        state: "São Paulo",
        state_abbr: "SP",
        city: "Jundiai"
      },
      {
        name: "Fabiana Almeida",
        email: "fabianaalmeida@email.com",
        phoneNumber: "1151428474",
        state: "São Paulo",
        state_abbr: "SP",
        city: "Jundiai"
      },
      {
        name: "Gabriel Rocha",
        email: "gabrielrocha@email.com",
        phoneNumber: "1164218153",
        state: "São Paulo",
        state_abbr: "SP",
        city: "Jundiai"
      },
      {
        name: "Isabela Souza",
        email: "isabelasouza@email.com",
        phoneNumber: "1154218575",
        state: "São Paulo",
        state_abbr: "SP",
        city: "Jundiai"
      },
      {
        name: "João Martins",
        email: "Joaomartins@email.com",
        phoneNumber: "1142517484",
        state: "São Paulo",
        state_abbr: "SP",
        city: "Jundiai"
      },
      {
        name: "Larissa Santos",
        email: "larissasantos@email.com",
        phoneNumber: "1684514251",
        state: "São Paulo",
        state_abbr: "SP",
        city: "Ribeirão Corrente"
      },
      {
        name: "Marcos Lima",
        email: "marcos@email.com",
        phoneNumber: "1645458741",
        state: "São Paulo",
        state_abbr: "SP",
        city: "Ribeirão Corrente"
      },
      {
        name: "Natália Oliveira",
        email: "nataliaoliveira@email.com",
        phoneNumber: "1632516253",
        state: "São Paulo",
        state_abbr: "SP",
        city: "Ribeirão Corrente"
      },
      {
        name: "Pedro Castro",
        email: "pedrocastro@email.com",
        phoneNumber: "1942516352",
        state: "São Paulo",
        state_abbr: "SP",
        city: "Campinas"
      },
      {
        name: "Renata Pereira",
        email: "renatapereira@email.com",
        phoneNumber: "1941536585",
        state: "São Paulo",
        state_abbr: "SP",
        city: "Campinas"
      },
      {
        name: "Thiago Rodrigues",
        email: "thiagorodrigues@email.com",
        phoneNumber: "1451236252",
        state: "São Paulo",
        state_abbr: "SP",
        city: "Bernardino De Campos"
      },
      {
        name: "Vanessa Silva",
        email: "vanessasilva@email.com",
        phoneNumber: "1725659595",
        state: "São Paulo",
        state_abbr: "SP",
        city: "Santana Da Ponte Pensa"
      },
      {
        name: "Wagner Costa",
        email: "wagnercosta@email.com",
        phoneNumber: "1364845121",
        state: "São Paulo",
        state_abbr: "SP",
        city: "Praia Grande"
      },
      {
        name: "Yasmin Mendes",
        email: "yasminmendes@email.com",
        phoneNumber: "1625659585",
        state: "São Paulo",
        state_abbr: "SP",
        city: "Bernardino De Campos"
      },
      {
        name: "Lucas Ferreira",
        email: "lucasferreira@email.com",
        phoneNumber: "1645259586",
        state: "São Paulo",
        state_abbr: "SP",
        city:"Bernardino de Campos"
      }
    ]
  }
  getJobs() {
    return [
        {
          name: "Fisioterapeuta",
          description: [
            "Recuperação total com fisioterapia.",
            "Movimento sem limitações, vida plena.",
            "Fisioterapia personalizada, resultados rápidos.",
            "Reabilitação eficaz para sua melhor saúde.",
            "Alívio de dores, recuperação duradoura.",
            "Restaure sua mobilidade, viva sem limites.",
            "Cuide do seu corpo, cuide da sua saúde.",
            "Fisioterapia moderna para vida ativa.",
            "Tratamentos precisos, resultados reais.",
            "Recuperação rápida com técnicas avançadas.",
            "Equilíbrio corporal, bem-estar total.",
            "Fisioterapia: caminho para uma vida saudável.",
            "Mobilidade renovada, dores aliviadas.",
            "Recuperação com cuidado e dedicação.",
            "Fisioterapeuta dedicado ao seu bem-estar.",
            "Viva sem dores, com fisioterapia eficaz.",
            "Movimentos saudáveis, qualidade de vida.",
            "Reabilitação completa para seu corpo.",
            "Fisioterapia inovadora, resultados notáveis.",
            "Restaure sua vitalidade com fisioterapia.",
          ],
          services: [
            "Fisioterapia Ortopédica",
            "Fisioterapia Neurofuncional",
            "Fisioterapia Respiratória",
            "Fisioterapia Cardiovascular",
            "Fisioterapia Geriátrica",
            "Fisioterapia Oncológica",
            "Fisioterapia Uroginecológica",
          ]
      },
      {
        name: "Personal Trainer",
        description: [
          "Transforme seu corpo, alcance seus objetivos!",
          "Treinos personalizados para resultados reais.",
          "Supere seus limites, conquiste sua melhor versão.",
          "Condicionamento físico personalizado e eficaz.",
          "Mude seu estilo de vida com treinos exclusivos.",
          "Personal Trainer dedicado ao seu sucesso fitness.",
          "Treinamento funcional para máximo desempenho.",
          "Atinja suas metas com planos de treino customizados.",
          "Motive-se, alcance seus objetivos com meu suporte.",
          "Treinos intensivos, resultados extraordinários.",
          "Personal Trainer: seu parceiro rumo à transformação.",
          "Treinos dinâmicos para uma vida ativa.",
          "Treinamento personalizado para todos os níveis.",
          "Exercícios eficientes para alcançar seu potencial.",
          "Superação de desafios com treinos adaptados.",
          "Conquiste um corpo forte com treinos dedicados.",
          "Metas claras, resultados rápidos com Personal Trainer.",
          "Experiência única de treino, resultados surpreendentes.",
          "Treinos personalizados para uma vida saudável.",
          "Personal Trainer comprometido com seu sucesso físico.",
        ],
        services: [
          "Treinamento Personalizado",
          "Avaliação Física",
          "Treinamento Funcional",
          "Treinamento de Força",
          "Treinamento Cardiovascular",
          "Treinamento para Perda de Peso",
          "Treinamento Esportivo",
          "Treinamento para Idosos",
          "Reabilitação através do Exercício"
        ]
      },
      {
        name: "Quiropraxista",
        description: [
          "Ajustes precisos para alívio total.",
          "Quiropraxia: equilíbrio e bem-estar.",
          "Liberte-se das dores com cuidado.",
          "Coluna saudável, vida plena.",
          "Mobilidade e postura aprimoradas!",
          "Bem-estar através da quiropraxia.",
          "Alívio natural para dores crônicas.",
          "Ajustes para uma vida sem limitações.",
          "Quiropraxia moderna, resultados reais.",
          "Reconquiste sua qualidade de vida.",
          "Cuide da sua coluna, cuide de você.",
          "Harmonia corporal com quiropraxia.",
          "Dores? Quiropraxia é a solução.",
          "Equilíbrio postural para todos.",
          "Sinta a diferença com ajustes.",
          "Quiropraxia: saúde em movimento.",
          "Alívio natural para dores diárias.",
          "Cuide da sua coluna, viva sem dores.",
          "Bem-estar através da quiropraxia.",
          "Coluna saudável, vida sem limitações.",
        ],
        services: [
          "Ajuste Quiroprático",
          "Avaliação da Coluna Vertebral",
          "Quiropraxia para Idosos",
          "Reabilitação Quiroprática",
          "Quiropraxia Geriátrica",
          "Quiropraxia para Dores Crônicas",
          "Quiropraxia para Alívio do Estresse",
          "Quiropraxia Preventiva"
        ]
      },
      {
        name: "Nutricionista",
        description: [
          "Nutrição saudável para vida plena.",
          "Transforme sua saúde com cardápios!",
          "Especialista em nutrição.",
          "Equilíbrio nutricional para todos.",
          "Plant Based: nutrição vegana.",
          "Emagrecimento com resultados!",
          "Tenho segredos para uma alimentação equilibrada.",
          "Nutrição para envelhecimento ativo.",
          "Intolerâncias? plano personalizado!",
          "Desintoxique seu corpo, renove-se!",
          "Gourmet: sabor e saúde juntos.",
          "Soluções nutritivas, vida plena.",
          "Cardápios sob medida, com resultados!",
          "Transforme sua vida pela comida.",
          "Planos nutricionais com saúde total!",
          "Viva leve, viva saudável!",
          "Equilíbrio nutricional diário.",
        ],
        services: [
          "Nutrição Funcional",
          "Nutrição Geriátrica",
          "Nutrição para Emagrecimento",
        ]
      }
    ]
  }
  genRandomNumbersByRange(range, limit) {
    const nums = [];

    for(let i=0; i<range; i++) {
      let randomNum = Math.floor(Math.random() * limit)

      let searchedNum = nums.find((item) => item === randomNum)
      while(searchedNum === randomNum) {
        randomNum = Math.floor(Math.random() * limit)
      }

      nums.push(randomNum)
    }

    return nums;
  }

  run() {
    const emailsAndNames = this.getNamesAndEmails();
    const jobs = this.getJobs();

    for(let i=0; i<emailsAndNames.length; i++) {
      const randomIndexJob = Math.floor(Math.random() * 4)

      const randomNumsIndexesForServices = this.genRandomNumbersByRange(
        3,
        jobs[randomIndexJob].services.length
      );
      const services = {
        main_services: jobs[randomIndexJob].services[randomNumsIndexesForServices[0]],
        second_services: jobs[randomIndexJob].services[randomNumsIndexesForServices[1]],
        third_services: jobs[randomIndexJob].services[randomNumsIndexesForServices[2]]
      }

      const randomNumForUserDescription = Math.floor(Math.random() * jobs[randomIndexJob].description.length)
      const user = userFactory({
        name: emailsAndNames[i].name,
        email: emailsAndNames[i].email,
        short_description: jobs[randomIndexJob].description[randomNumForUserDescription],
        password: '123456',
        state: emailsAndNames[i].state,
        state_abbr: emailsAndNames[i].state_abbr,
        city: emailsAndNames[i].city,
        job: jobs[randomIndexJob].name,
        phone_number: emailsAndNames[i].phoneNumber,
        value: Math.random() * (280 - 100) + 100,
        main_services: services.main_services,
        second_services: services.second_services,
        third_services: services.third_services
      }) 

      UserOnLocalStorage.create(user);
    }
  }
}

const seed = new SeedGenerator()

if(UserOnLocalStorage.getLength() <= 0)
  seed.run()
