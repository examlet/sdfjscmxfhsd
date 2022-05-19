<script setup lang="ts">
const navbar = ref(false)
const switchNavbar = () => navbar.value = !navbar.value;
const router = useRouter();
const store = useStore();

const toAcept = async (name: string, price: string) => {
    store.setStore(name, price);
    router.push('/acept')
}
</script>

<template>
    <div h-full w-full text="[#ffffff]">
        <header bg="[#ed4343]">
            <div h-100px p-20px flex justify-between items-center>
                <div fw-800 text="32px">PĀRTA</div>
                <div cursor-pointer flex xl:hidden items-center @click="switchNavbar">
                    <div relative inline-block w-40px h-40px space-y-2 h-full>
                        <div bg="[#ffffff]" w-40px h-3px rounded-4px />
                        <div bg="[#ffffff]" w-40px h-3px rounded-4px />
                        <div bg="[#ffffff]" w-40px h-3px rounded-4px />
                    </div>
                </div>
            </div>
            <div v-if="navbar" grid grid-rows-3 gap-40px text-center items-center my-20px>
                <div text="20px" onclick="document.getElementById('price2').scrollIntoView();">ENEM</div>
                <div text="20px" onclick="document.getElementById('price2').scrollIntoView();">MEDICINA</div>
                <div text="20px" onclick="document.getElementById('price2').scrollIntoView();">AULAS PARTICULAS</div>
            </div>
            <div py-20px text-center max-w="480px lg:full">
                <h3 text-20px fw-700 leading-23px>O MELHOR CURSINHO ONLINE ENEM</h3>
                <h1 mt-8px text="24px" fw-800 leading-40px style="font-family: Montserrat,sans-serif;">
                    JÁ SÃO MAIS DE 1.400
                    <br>ESTUDANTES
                    <br>APROVADOS
                    <br>SÓ EM 2022
                </h1>
                <p mt-20px text="[#efeee0]">A próxima aprovação pode ser a sua. Tenha uma preparação sólida com o PARTA!
                </p>
                <div mt-32px flex items-center gap-16px justify-center>
                    <button rounded h-32px px-14px fw-600 bg="[#ffffff]" text="14px [#780000]"
                        onclick="document.getElementById('price1').scrollIntoView();">CURSO ENEM 2022</button>
                    <button rounded h-32px px-14px fw-600 bg="[#0c8b85]" text="14px [#ffffff]"
                        onclick="document.getElementById('price2').scrollIntoView();">CURSO MED 2022</button>
                </div>
            </div>
        </header>
        <main>
            <div fixed bottom-20px left-20px right-20px z-10000 style="max-width: calc(100% - 40px);"
                onclick="window.open('https://api.whatsapp.com/send/?phone=5511945729085&text=Olá, quero fazer a minha matrícula e ser aprovado com o ENEM.&app_absent=0', '_top')">
                <button rounded-2xl fw-700 bg="[#25d366]" text="20px center [#ffffff]" h-45px w-full>Compre pelo
                    Whatsapp</button>
            </div>

            <section mt-120px text-center text="[#000000]">
                <h2 text="24px [#000000]" mb-50px>Qual seu objetivo de aprovação?</h2>
                <div grid grid-cols="1 xl:3" gap-40px text-center>
                    <div mx-20px justify-center>
                        <p text="24px [#780000]" leading-28px fw-700 my-15px>ENEM</p>
                        <div fw-400 text="16px" leading-24px mb-8px w-298px mx-auto>
                            Com o PARTA! ENEM você tem uma preparação sólida para conquistar a vaga dos sonhos.
                        </div>
                        <button rounded h-40px bg="[#ED4343]" text="26px [#ffffff]" fw-700 w-298px
                            onclick="document.getElementById('price2').scrollIntoView();">SABER MAIS</button>
                    </div>
                    <div mx-20px justify-center>
                        <p text="24px [#1E6B6B]" leading-28px fw-700 my-15px>MEDICINA</p>
                        <div fw-400 text="16px" leading-24px mb-8px w-298px mx-auto>
                            O foco do PARTA! MED é a alta performance para você aprovar no curso mais concorrido.
                        </div>
                        <button rounded h-40px bg="[#47A19A]" text="26px [#ffffff]" fw-700 w-298px
                            onclick="document.getElementById('price2').scrollIntoView();">SABER MAIS</button>
                    </div>
                    <div mx-20px justify-center>
                        <p text="24px [#2C7BBC]" leading-28px fw-700 my-15px>AULAS PARTICULARES</p>
                        <div fw-400 text="16px" leading-24px mb-8px w-298px mx-auto>
                            Reforço online e individual para mandar bem no Ensino Fundamental II ou no Ensino Médio.
                        </div>
                        <button rounded h-40px bg="[#2C7BBC]" text="26px [#ffffff]" fw-700 w-298px
                            onclick="document.getElementById('price2').scrollIntoView();">SABER MAIS</button>
                    </div>
                </div>
            </section>
            <section mt-120px text="[#000000] center">
                <h2 text="24px" mb-40px>
                    Quer aprovar com o ENEM?
                    <br>
                    <strong>Temos o método ideal!</strong>
                </h2>
                <div grid grid-cols="1 xl:3" gap-40px text-center>
                    <div>
                        <img src="https://www.mesalva.com/b/metodo/aulas-sem-distracao.svg" alt="Aulas sem distração"
                            width="85px" height="85px" mx-auto>
                        <p text="24px [#780000]" fw-600 leading-28px my-15px>Aulas sem distração</p>
                        <div fw-400 text="16px" leading-24px my-8px w-298px mx-auto>
                            Conteúdo completo e de qualidade + aulas objetivas e 100% focadas.
                        </div>
                    </div>
                    <div>
                        <img src="https://www.mesalva.com/b/metodo/redacoes-ilimitadas.svg" alt="Aulas sem distração"
                            width="85px" height="85px" mx-auto>
                        <p text="24px [#780000]" fw-600 leading-28px my-15px>Redações ilimitadas</p>
                        <div fw-400 text="16px" leading-24px my-8px w-298px mx-auto>
                            Com o
                            <strong>Combo PARTA! BOX 2022</strong>
                            você envia quantas redações quiser e as recebe corrigidas para ficar mais perto da nota
                            1.000
                        </div>
                    </div>
                    <div>
                        <img src="https://www.mesalva.com/b/metodo/rotina-organizada.svg" alt="Aulas sem distração"
                            width="85px" height="85px" mx-auto>
                        <p text="24px [#780000]" fw-600 leading-28px my-15px>Rotina organizada</p>
                        <div fw-400 text="16px" leading-24px my-8px w-298px mx-auto>
                            Conteúdo completo e de qualidade + aulas objetivas e 100% focadas.
                        </div>
                    </div>
                </div>
            </section>

            <section mt-120px text="[#000000] center">
                <h2 text="24px">
                    Motivos para escolher o<br>
                    <strong>PARTA!</strong>
                </h2>
                <div mt-40px>
                    <div px="20px lg:140px">
                        <div grid grid-cols="1 xl:2">
                            <div flex items-start text-left mb-20px>
                                <div w-80px h-60px rounded="50%" bg="[#efeee0]" text="34px center [#ED4343]"
                                    leading-60px fw-600>1</div>
                                <div ml-10px fw-700 text="24px [#780000]" leading-30px>Professores especialistas no ENEM
                                </div>
                            </div>
                            <img src="https://media.istockphoto.com/photos/woman-working-at-home-and-reading-emails-on-her-laptop-picture-id1330800043?b=1&k=20&m=1330800043&s=170667a&w=0&h=YFuYLYWLnt1tpr90BxNWSgTE3yse4XUUml0jSTI2A9g="
                                alt="" width="445" height="280">
                            <ul text="left 16px" mt-10px>
                                <li>✔ Conhecem os conteúdos e questões</li>
                                <li>✔ Didática treinada para aulas online</li>
                                <li>✔ Constantemente avaliados pelos estudantes</li>
                            </ul>
                            <button h-42px w-260px bg="[#ED4343]" text="26px [#ffffff]" fw-600 rounded mx-auto my-70px
                                onclick="document.getElementById('price2').scrollIntoView();">Começar agora</button>
                        </div>
                        <div grid grid-cols="1 xl:2">
                            <div flex items-start text-left mb-20px>
                                <div w-80px h-60px rounded="50%" bg="[#efeee0]" text="34px center [#ED4343]"
                                    leading-60px fw-600>2</div>
                                <div ml-10px fw-700 text="24px [#780000]" leading-30px>Suporte didático e emocional
                                </div>
                            </div>
                            <img src="https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                                alt="" width="445" height="280">
                            <ul text="left 16px" mt-10px>
                                <li>✔ Chat online com nosso time</li>
                                <li>✔ Fórum tira-dúvidas com estudantes e professores</li>
                                <li>✔ Conteúdos exclusivos para preparação emocional</li>
                            </ul>
                            <button h-42px w-260px bg="[#ED4343]" text="26px [#ffffff]" fw-600 rounded mx-auto my-70px
                                onclick="document.getElementById('price2').scrollIntoView();">Começar agora</button>
                        </div>
                        <div grid grid-cols="1 xl:2">
                            <div flex items-start text-left mb-20px>
                                <div w-80px h-60px rounded="50%" bg="[#efeee0]" text="34px center [#ED4343]"
                                    leading-60px fw-600>3</div>
                                <div ml-10px fw-700 text="24px [#780000]" leading-30px>Método de aula exclusivo</div>
                            </div>
                            <img src="https://www.mesalva.com/b/motivos/metodo.png" alt="" width="445" height="280">
                            <ul text="left 16px" mt-10px>
                                <li>✔ Tempo de aula bem otimizado e produtivo</li>
                                <li>✔ Didática fácil de entender e absorver</li>
                                <li>✔ Técnica da mãozinha. </li>
                            </ul>
                            <button h-42px w-260px bg="[#ED4343]" text="26px [#ffffff]" fw-600 rounded mx-auto my-70px
                                onclick="document.getElementById('price2').scrollIntoView();">Começar agora</button>
                        </div>
                        <div grid grid-cols="1 xl:2">
                            <div flex items-start text-left mb-20px>
                                <div w-80px h-60px rounded="50%" bg="[#efeee0]" text="34px center [#ED4343]"
                                    leading-60px fw-600>4</div>
                                <div ml-10px fw-700 text="24px [#780000]" leading-30px>Estude onde, como e quando quiser
                                </div>
                            </div>
                            <img src="https://images.unsplash.com/photo-1617106400337-66e7d72a466e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                alt="" width="445" height="280">
                            <ul text="left 16px" mt-10px>
                                <li>✔ Plataforma 100% online (app e site)</li>
                                <li>✔ Rotina flexível e adaptada individualmente</li>
                                <li>✔ Múltiplas ferramentas (aulas em vídeos, simulados, exercícios e muito mais)</li>
                            </ul>
                            <button h-42px w-260px bg="[#ED4343]" text="26px [#ffffff]" fw-600 rounded mx-auto my-70px
                                onclick="document.getElementById('price2').scrollIntoView();">Começar agora</button>
                        </div>
                        <div grid grid-cols="1 xl:2">
                            <div flex items-start text-left mb-20px>
                                <div w-80px h-60px rounded="50%" bg="[#efeee0]" text="34px center [#ED4343]"
                                    leading-60px fw-600>5</div>
                                <div ml-10px fw-700 text="24px [#780000]" leading-30px>PARTA! BOX: Uma caixa cheia de
                                    APROVAÇÃO</div>
                            </div>
                            <img src="https://media.istockphoto.com/photos/productivity-takes-a-hands-on-approach-picture-id1291770278?b=1&k=20&m=1291770278&s=170667a&w=0&h=S3V05Sagf9lHtcogndOmWUGVLsAZ89d8DAC7SOSl_lA="
                                alt="" width="445" height="280">
                            <ul text="left 16px" mt-10px>
                                <li>✔ 8 apostilas teóricas</li>
                                <li>✔ 4 apostilas de exercícios</li>
                                <li>✔ 1 apostilas de redação</li>
                            </ul>
                            <button h-42px w-260px bg="[#ED4343]" text="26px [#ffffff]" fw-600 rounded mx-auto my-70px
                                onclick="document.getElementById('price2').scrollIntoView();">Começar agora</button>
                        </div>
                    </div>
                </div>
            </section>
            <section bg="[#780000]" py-40px>
                <div grid grid-cols="1 lg:3" gap-20px text-center items-center>
                    <div>
                        <p text="39px [#FFC233]" fw-600>4 MILHÕES</p>
                        <span text="22px">Alunos impactados</span>
                    </div>
                    <div>
                        <p text="39px [#FFC233]" fw-600>+250 MIL</p>
                        <span text="22px">Redações corrigidas</span>
                    </div>
                    <div>
                        <p text="39px [#FFC233]" fw-600>+100 MILHÕES</p>
                        <span text="22px">Exercícios resolvidos</span>
                    </div>
                </div>

            </section>
            <section pt-120px bg="[#efeee0]" id="price1" px="lg:200px">
                <div text="35px [#000000]" leading-44px text-center fw-700>
                    COMECE A JORNADA<br lg:hidden> RUMO AO CURSO <br lg:hidden>DOS SONHOS AGORA
                </div>

                <div mt-50px px-50px grid grid-cols="[auto_1fr]" gap-20px>
                    <img src="https://cdn.mesalva.com/uploads/lp/enem/2020/depoimentos-2020/Mariana-Marques-C.png"
                        width="80" height="80" alt="Depoimentos 2020">
                    <p text="14px [#000000]" leading-18px>Sempre fui péssima em redação, fiz ENEM outras 3x e sempre
                        fiquei com notas entre 600 e 660. Tirar 860 foi um máximo para mim! Não tive que esperar para
                        entrar na faculdade, pois fiquei em 1° lugar da 1ª chamada. Muito obrigada, de coração!! ❤</p>
                </div>

                <div mt-10px ml-100px text="[#000000]">
                    <p fw-700>Mariana Marques</p>
                    <p>Matemática Industrial, UFPR</p>
                </div>

                <div flex items-center justify-between my-40px overflow-x-scroll gap-20px text="[#000000]">
                    <div ml-15px min-w-300px min-h-750px rounded-lg bg="[#ffffff]" py-30px px-20px text-center>
                        <div text-20px>Plano Básico</div>
                        <div text-12px>Mais econômico Acesso por 12 meses</div>

                        <div mt-20px text="14px [#7E7E7E]">
                            De <span line-through>12x de R$ 40,00</span>
                        </div>

                        <div flex items-end justify-center>
                            <span text="14px" leading-25px mr-8px>12x</span>
                            <div text="45px [#780000]" fw-600 leading="100%">R$ 29,90</div>
                        </div>
                        <!-- 10% off no boleto/pix à vista:
                        <br> R$ 171,72<br> -->
                        <button @click="toAcept('Plano Básico', '29.90')" mt-10px mb-20px h-42px w-full bg="[#000000]"
                            text="26px [#ffffff]" fw-600 rounded mx-auto>Começar
                            agora</button>
                        <hr text="[#CDCCCC]">
                        <ul flex="[1_1]" text="14px left" leading-18px>
                            <li fw-600 mt-15px>👉10 (dez) horas semanais de aulas ao vivo</li>
                            <li fw-600 mt-15px>👉1 (uma) correção de redação por mês</li>
                            <li fw-600 mt-15px>👉1 (uma) hora de prática de escrita ao vivo com guia
orientação para organização e planejamento</li>
                            <li fw-600 mt-15px>👉simulados do ENEM, FUVEST e UNICAMP</li>
                        </ul>
                    </div>

                    <div ml-15px min-w-300px min-h-750px rounded-lg bg="[#ffffff]" py-30px px-20px text-center>
                        <div text-20px>PARTA Med</div>
                        <div text-12px>O mais completo Acesso por 12 meses</div>

                        <div mt-20px text="14px [#7E7E7E]">
                            De <span line-through>12x de R$ 400,00</span>
                        </div>

                        <div flex items-end justify-center>
                            <span text="14px" leading-25px mr-8px>12x</span>
                            <div text="45px [#4CA19A]" fw-600 leading="100%">R$ 99,90</div>
                        </div>
                        <!-- 10% off no boleto/pix à vista:
                        <br> R$ 322,92<br> -->
                        <button @click="toAcept('PARTA Med', '99.90')" mt-10px mb-20px h-42px w-full
                            bg="[#000000]" text="26px [#ffffff]" fw-600 rounded mx-auto>Começar
                            agora</button>
                        <hr text="[#CDCCCC]">
                        <ul flex="[1_1]" text="14px left" leading-18px>
                            <li fw-600 mt-15px>💥20 (vinte) horas semanais de aulas ao vivo</li>
                            <li fw-600 mt-15px>💥5 (cinco) correções de redação por mês</li>
                            <li fw-600 mt-15px>💥7 (sete)  horas de sessões de perguntas e respontas ao vivo com exercícios</li>
                            <li fw-600 mt-15px>💥Mentoria ajudando você a entender melhor todos os temas e respondendo
                                todas suas perguntas sobre o ingresso nas universidades</li>
                            <li fw-600 mt-15px>💥2 (duas) horas de prática de escrita ao vivo com guia
orientação para organização e planejamento</li>
                            <li fw-600 mt-15px>💥simulados do ENEM, FUVEST e UNICAMP
                            </li>
                        </ul>
                    </div>

                    <div ml-15px min-w-300px min-h-750px rounded-lg bg="[#ffffff]" py-30px px-20px text-center>
                        <div text-20px>PARTA Top</div>
                        <div text-12px>O mais completo Acesso por 12 meses</div>

                        <div mt-20px text="14px [#7E7E7E]">
                            De <span line-through>12x de R$ 540,00</span>
                        </div>

                        <div flex items-end justify-center>
                            <span text="14px" leading-25px mr-8px>12x</span>
                            <div text="45px [#4CA19A]" fw-600 leading="100%">R$ 199,90</div>
                        </div>
                        <!-- 10% off no boleto/pix à vista:
                        <br> R$ 322,92<br> -->
                        <button @click="toAcept('PARTA Top', '199.90')" mt-10px mb-20px h-42px w-full
                            bg="[#000000]" text="26px [#ffffff]" fw-600 rounded mx-auto>Começar
                            agora</button>
                        <hr text="[#CDCCCC]">
                        <ul flex="[1_1]" text="14px left" leading-18px>
                            <li fw-600 mt-15px>🔥20 (vinte) horas semanais de aulas ao vivo</li>
                            <li fw-600 mt-15px>🔥Lição de casa no estilo ENEM</li>
                            <li fw-600 mt-15px>🔥Orientador respondendo em todas questões práticas</li>
                            <li fw-600 mt-15px>🔥Mentor ajudando a entender todos os temas e respondendo todas as perguntas relacionado ao ingresso na universidade</li>
                            <li fw-600 mt-15px>🔥10 (dez) correções de redação por mês</li>
                            <li fw-600 mt-15px>🔥15 (quinze) horas de sessões de perguntas e respontas ao vivo com exercícios </li>
                            <li fw-600 mt-15px>🔥4 (quatro) horas de prática de escrita ao vivo com guia
orientação para organização e planejamento</li>
                            <li fw-600 mt-15px>🔥simulados do ENEM, FUVEST e UNICAMP </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section mt-120px text="[#000000] center" px="20px lg:200px">
                <h2 text="24px">
                    Não acredite apenas na
                    <strong>nossa palavra...</strong>
                </h2>
                <p text="22px" mt-20px>Se inspire nestas histórias de sucesso de alunos que aprovaram com o PARTA!
                </p>
                <div flex items-center justify-between my-40px overflow-x-scroll pl-16px pb-20px>
                    <iframe width="350" height="200" src="https://www.youtube.com/embed/cSXlHRN5jyM"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    <iframe ml-40px width="350" height="200" src="https://www.youtube.com/embed/S6QHK0YOzmQ"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
                <button h-42px w-260px bg="[#ED4343]" text="26px [#ffffff]" fw-600 rounded mx-auto my-70px
                    onclick="document.getElementById('price2').scrollIntoView();">Começar
                    agora</button>
            </section>
            <section pt-120px pb-20px bg="[#f8f8f8]" text="[#000000] left" px="20px lg:200px">
                <h2 text="24px center">
                    Desde o dia 1, estamos<br>
                    <strong>revolucionando a<br>educação</strong>
                </h2>
                <p mt-20px text="16px center" mb-40px>Estes são alguns dos prêmios que já recebemos como reconhecimento.
                </p>

                <div bg="[#ffffff]" h-200px mx-10px style="box-shadow: 0 0 20px rgb(0 0 0 / 10%);" grid grid-rows-2
                    p-20px mb-20px>
                    <div text="20px" italic>PARTA! como um dos grandes exemplos do Brasil em inovação</div>
                    <div p-20px>
                        <img src="https://www.mesalva.com/b/premios/endeavor.png" alt="">
                    </div>
                </div>

                <div bg="[#ffffff]" h-200px mx-10px style="box-shadow: 0 0 20px rgb(0 0 0 / 10%);" grid grid-rows-2
                    p-20px mb-20px>
                    <div text="20px" italic>Premiação de projetos sociais inovadores</div>
                    <div p-20px>
                        <img src="https://www.mesalva.com/b/premios/premio-jovens-inspiradores.png" alt="">
                    </div>
                </div>

                <div bg="[#ffffff]" h-200px mx-10px style="box-shadow: 0 0 20px rgb(0 0 0 / 10%);" grid grid-rows-2
                    p-20px mb-20px>
                    <div text="20px" italic>Premiação como uma das startups mais promissoras do Brasil</div>
                    <div p-20px>
                        <img src="https://www.mesalva.com/b/premios/100-startups-to-watch.png" alt="">
                    </div>
                </div>

                <div bg="[#ffffff]" h-200px mx-10px style="box-shadow: 0 0 20px rgb(0 0 0 / 10%);" grid grid-rows-2
                    p-20px mb-20px>
                    <div text="20px" italic>Miguel Andorffy, fundador do PARTA!, reconhecido como um dos
                        empreendedores mais brilhantes</div>
                    <div p-20px>
                        <img src="https://www.mesalva.com/b/premios/30-under-30.png" alt="">
                    </div>
                </div>

                <div bg="[#ffffff]" h-200px mx-10px style="box-shadow: 0 0 20px rgb(0 0 0 / 10%);" grid grid-rows-2
                    p-20px mb-20px>
                    <div text="20px" italic>PARTA! leva prêmio como solução de educação inovadora</div>
                    <div p-20px>
                        <img src="https://www.mesalva.com/b/premios/start-ed.png" alt="">
                    </div>
                </div>

                <div bg="[#ffffff]" h-200px mx-10px style="box-shadow: 0 0 20px rgb(0 0 0 / 10%);" grid grid-rows-2
                    p-20px mb-20px>
                    <div text="20px" italic>PARTA! leva prêmio como o melhor conteúdo de educação por voto popular
                    </div>
                    <div p-20px>
                        <img src="https://www.mesalva.com/b/premios/ibest.png" alt="">
                    </div>
                </div>

                <div w-full text-center my-70px>
                    <button h-42px w-260px bg="[#ED4343]" text="26px [#ffffff]" fw-600 rounded mx-auto
                        onclick="document.getElementById('price2').scrollIntoView();">Começar
                        agora</button>
                </div>

                <div />
            </section>

            <section mt-120px text="[#000000] center" pb-70px>
                <h2 text="24px" mb-40px>
                    Quem estuda com o PARTA!<br>tem
                    <strong>muitos benefícios</strong>
                </h2>
                <div grid grid-cols="1 xl:3" gap-40px text-center>
                    <div>
                        <img src="https://www.mesalva.com/b/beneficios/redacao-sem-medo.svg" alt="Aulas sem distração"
                            width="85px" height="85px" mx-auto>
                        <p text="24px [#780000]" fw-600 leading-28px my-15px>Redação sem medo</p>
                        <div fw-400 text="16px" leading-24px my-8px w-298px mx-auto>
                            A correção mais completa da internet. Saiba exatamente onde melhorar com as marcações no
                            texto.
                        </div>
                    </div>
                    <div>
                        <img src="https://www.mesalva.com/b/beneficios/rotina-ideal.svg" alt="Aulas sem distração"
                            width="85px" height="85px" mx-auto>
                        <p text="24px [#780000]" fw-600 leading-28px my-15px>A rotina ideal: a sua</p>
                        <div fw-400 text="16px" leading-24px my-8px w-298px mx-auto>
                            O plano de estudos personalizado é feito pensando na sua disponibilidade e necessidades de
                            conteúdo. Um cronograma diário só seu!
                        </div>
                    </div>
                    <div>
                        <img src="https://www.mesalva.com/b/beneficios/aprenda-mais-em-menos.svg"
                            alt="Aulas sem distração" width="85px" height="85px" mx-auto>
                        <p text="24px [#780000]" fw-600 leading-28px my-15px>Aprenda mais em menos tempo</p>
                        <div fw-400 text="16px" leading-24px my-8px w-298px mx-auto>
                            Não perca o foco! Com nossa técnica exclusiva você aprende de maneira simples e objetiva.
                        </div>
                    </div>

                    <div>
                        <img src="https://www.mesalva.com/b/beneficios/acerte-as-questoes-certas.svg"
                            alt="Aulas sem distração" width="85px" height="85px" mx-auto>
                        <p text="24px [#780000]" fw-600 leading-28px my-15px>Acerte as questões certas</p>
                        <div fw-400 text="16px" leading-24px my-8px w-298px mx-auto>
                            +12 MIL exercícios com resolução para treinar e o direcionamento de quais questões não pode
                            deixar de acertar na prova para um notão.
                        </div>
                    </div>

                    <div>
                        <img src="https://www.mesalva.com/b/beneficios/estude-online.svg" alt="Aulas sem distração"
                            width="85px" height="85px" mx-auto>
                        <p text="24px [#780000]" fw-600 leading-28px my-15px>Estude online, não sozinho</p>
                        <div fw-400 text="16px" leading-24px my-8px w-298px mx-auto>
                            Com o chat online, o fórum tira-dúvidas e as mentorias ao vivo você chega no dia da prova
                            sem nenhuma dúvida deixada para trás.
                        </div>
                    </div>

                    <div>
                        <img src="https://www.mesalva.com/b/beneficios/redacao-sem-medo.svg" alt="Aulas sem distração"
                            width="85px" height="85px" mx-auto>
                        <p text="24px [#780000]" fw-600 leading-28px my-15px>Treine como se estivesse no ENEM</p>
                        <div fw-400 text="16px" leading-24px my-8px w-298px mx-auto>
                            Simulados online e com questões iguaizinhas à prova oficial em conteúdo e dificuldade.
                            Prepare-se e evolua a cada simulado.
                        </div>
                    </div>
                </div>
            </section>

            <section py-20px bg="[#efeee0]" text="[#000000] center" id="price2" px="lg:200px">
                <h2 mb-20px text="24px">Os planos ideais para você <strong>APROVAR</strong></h2>
                <p px-20px>Escolha a opção ideal para você e comece agora mesmo!</p>
                <div my-10px fw-600 text="20px [#ffc233]">07 DIAS GARANTIA</div>
                <div flex items-center justify-between my-40px overflow-x-scroll gap-20px>
                    <div ml-15px min-w-300px min-h-750px rounded-lg bg="[#ffffff]" py-30px px-20px text-center>
                        <div text-20px>Plano Básico</div>
                        <div text-12px>Mais econômico Acesso por 12 meses</div>

                        <div mt-20px text="14px [#7E7E7E]">
                            De <span line-through>12x de R$ 40,00</span>
                        </div>

                        <div flex items-end justify-center>
                            <span text="14px" leading-25px mr-8px>12x</span>
                            <div text="45px [#780000]" fw-600 leading="100%">R$ 29,90</div>
                        </div>
                        <!-- 10% off no boleto/pix à vista:
                        <br> R$ 171,72<br> -->
                        <button @click="toAcept('Plano Básico', '29.90')" mt-10px mb-20px h-42px w-full bg="[#000000]"
                            text="26px [#ffffff]" fw-600 rounded mx-auto>Começar
                            agora</button>
                        <hr text="[#CDCCCC]">
                        <ul flex="[1_1]" text="14px left" leading-18px>
                            <li fw-600 mt-15px>👉10 (dez) horas semanais de aulas ao vivo</li>
                            <li fw-600 mt-15px>👉1 (uma) correção de redação por mês</li>
                            <li fw-600 mt-15px>👉1 (uma) hora de prática de escrita ao vivo com guia
orientação para organização e planejamento</li>
                            <li fw-600 mt-15px>👉simulados do ENEM, FUVEST e UNICAMP</li>
                        </ul>
                    </div>

                    <div ml-15px min-w-300px min-h-750px rounded-lg bg="[#ffffff]" py-30px px-20px text-center>
                        <div text-20px>PARTA Med</div>
                        <div text-12px>O mais completo Acesso por 12 meses</div>

                        <div mt-20px text="14px [#7E7E7E]">
                            De <span line-through>12x de R$ 400,00</span>
                        </div>

                        <div flex items-end justify-center>
                            <span text="14px" leading-25px mr-8px>12x</span>
                            <div text="45px [#4CA19A]" fw-600 leading="100%">R$ 99,90</div>
                        </div>
                        <!-- 10% off no boleto/pix à vista:
                        <br> R$ 322,92<br> -->
                        <button @click="toAcept('PARTA Med', '99.90')" mt-10px mb-20px h-42px w-full
                            bg="[#000000]" text="26px [#ffffff]" fw-600 rounded mx-auto>Começar
                            agora</button>
                        <hr text="[#CDCCCC]">
                        <ul flex="[1_1]" text="14px left" leading-18px>
                            <li fw-600 mt-15px>💥20 (vinte) horas semanais de aulas ao vivo</li>
                            <li fw-600 mt-15px>💥5 (cinco) correções de redação por mês</li>
                            <li fw-600 mt-15px>💥7 (sete)  horas de sessões de perguntas e respontas ao vivo com exercícios</li>
                            <li fw-600 mt-15px>💥Mentoria ajudando você a entender melhor todos os temas e respondendo
                                todas suas perguntas sobre o ingresso nas universidades</li>
                            <li fw-600 mt-15px>💥2 (duas) horas de prática de escrita ao vivo com guia
orientação para organização e planejamento</li>
                            <li fw-600 mt-15px>💥simulados do ENEM, FUVEST e UNICAMP
                            </li>
                        </ul>
                    </div>

                    <div ml-15px min-w-300px min-h-750px rounded-lg bg="[#ffffff]" py-30px px-20px text-center>
                        <div text-20px>PARTA Top</div>
                        <div text-12px>O mais completo Acesso por 12 meses</div>

                        <div mt-20px text="14px [#7E7E7E]">
                            De <span line-through>12x de R$ 540,00</span>
                        </div>

                        <div flex items-end justify-center>
                            <span text="14px" leading-25px mr-8px>12x</span>
                            <div text="45px [#4CA19A]" fw-600 leading="100%">R$ 199,90</div>
                        </div>
                        <!-- 10% off no boleto/pix à vista:
                        <br> R$ 322,92<br> -->
                        <button @click="toAcept('PARTA Top', '199.90')" mt-10px mb-20px h-42px w-full
                            bg="[#000000]" text="26px [#ffffff]" fw-600 rounded mx-auto>Começar
                            agora</button>
                        <hr text="[#CDCCCC]">
                        <ul flex="[1_1]" text="14px left" leading-18px>
                            <li fw-600 mt-15px>🔥20 (vinte) horas semanais de aulas ao vivo</li>
                            <li fw-600 mt-15px>🔥Lição de casa no estilo ENEM</li>
                            <li fw-600 mt-15px>🔥Orientador respondendo em todas questões práticas</li>
                            <li fw-600 mt-15px>🔥Mentor ajudando a entender todos os temas e respondendo todas as perguntas relacionado ao ingresso na universidade</li>
                            <li fw-600 mt-15px>🔥10 (dez) correções de redação por mês</li>
                            <li fw-600 mt-15px>🔥15 (quinze) horas de sessões de perguntas e respontas ao vivo com exercícios </li>
                            <li fw-600 mt-15px>🔥4 (quatro) horas de prática de escrita ao vivo com guia
orientação para organização e planejamento</li>
                            <li fw-600 mt-15px>🔥simulados do ENEM, FUVEST e UNICAMP</li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>

        <footer bg="[#ffffff]" text="[#000000]" px-20px>
            PARTA:
            <a href="http://wa.link/n742ca">whatsapp</a>
            <a ml="20px" href="https://www.youtube.com/channel/UCNhUiWpkAKePO1i3EiPJe7A">youtube</a>
        </footer>
    </div>
</template>

<style scoped>
</style>