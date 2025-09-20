document.onload = $(function () {
  setTimeout(() => {
    new bootstrap.Modal(document.getElementById('downloadEbookModal')).show();
  }, 2000);

  // Menu Fixo
  $(window).bind('scroll', function () {
    var navHeight = $('.header').height();

    if ($(window).scrollTop() > navHeight) {
      $('.header')
        .addClass('fixed')
        .attr('style', `--header-top-height: -${$('.header-top').outerHeight()}px`);
    } else {
      $('.header').removeClass('fixed');
    }
  });
  // Menu Fixo

  // Swiper Carrousel
  var swiper = new Swiper('.card_slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 2000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });
  // Swiper Carrousel
});

document.onload = $(function () {
  const EVENTS_FOLDER = '../img/eventos';
  const eventData = {
    1: {
      name: 'A Self do Terapeuta',
      description: `<p>✨Lançamento do Livro “O Self do Terapeuta”✨</p>
      <p>Foi um prazer imenso compartilhar com todos o lançamento do livro “O Self do Terapeuta”, obra que tivemos a honra de receber a co-autora e a talentosa Psicóloga Danielle Damo. O evento também contou com um Soirée exclusivo para profissionais de Psicologia e terapeutas sistêmicos, que organizamos com tanto carinho em parceria com Michelly Martinely e a LIASIS.</p>`,
      prefix: 'self-do-terapeuta',
      quantity: 10,
      type: 'jpeg',
    },
    2: {
      name: 'Palestra Fan Noroeste',
      description: `<p>Palestra para a turma de Pedagogia da faculdade Fan Noroeste.</p>`,
      prefix: 'palestra-fan-noroeste',
      quantity: 2,
      type: 'jpeg',
    },
    3: {
      name: 'Seminário de Psicologia Jurídica e Avaliação Psicológica do CrP09',
      description: `
        <p>“A vida é uma constante jornada de aprendizado. Cada experiência, cada desafio nos molda e nos torna quem somos.”</p>
        <p>
          Deixando Registrado o Seminário de Psicologia Jurídica e Avaliação Psicológica do CrP09.
          Um dia de muitas trocas, aprendizados e oportunidades.
          Fico sempre feliz e grato por estar próximo de pessoas extraordinárias.
        </p>
      `,
      prefix: 'seminario-crp09',
      quantity: 4,
      type: 'jpeg',
    },
    4: {
      name: 'Teste HTP 02',
      description: `
        <p>“Multiplicando saberes, fortalecendo a prática: a sinergia como impulsionadora da nossa jornada de aprendizado.”</p>
        <p>E assim foi o curso de formação no novo teste de HTP, ministrado pela psicóloga e professora acadêmica @sararcribeiro.</p>
        <p>Estou imensamente feliz por mais projeto que deu certo, que conseguimos sair ainda melhores, com foco no conhecimento e no crescimento através da aprendizagem.</p>
        <p>Grato por cada um que fez parte dessa turma, cada amizade que a psicologia me trouxe e cada um que é referência para mim.</p>
        <p>Com coração grato e pensando no próximo rsrs desafio é conhecimento me move.</p>
        <br>
        <p><strong>Yuri Rander</strong></p>
        <p>Psicólogo CRP09.16202</p>
      `,
      prefix: 'teste-htp02',
      quantity: 8,
      type: 'jpeg',
    },
    5: {
      name: 'Teste HTP',
      description: `
        <p>“Multiplicando saberes, fortalecendo a prática: a sinergia como impulsionadora da nossa jornada de aprendizado.”</p>
        <p>E assim foi o curso de formação no novo teste de HTP, ministrado pela psicóloga e professora acadêmica @sararcribeiro.</p>
        <p>Estou imensamente feliz por mais projeto que deu certo, que conseguimos sair ainda melhores, com foco no conhecimento e no crescimento através da aprendizagem.</p>
        <p>Grato por cada um que fez parte dessa turma, cada amizade que a psicologia me trouxe e cada um que é referência para mim.</p>
        <p>Com coração grato e pensando no próximo rsrs desafio é conhecimento me move.</p>
        <br>
        <p><strong>Yuri Rander</strong></p>
        <p>Psicólogo CRP09.16202</p>
      `,
      prefix: 'teste-htp',
      quantity: 4,
      type: 'jpeg',
    },
    6: {
      name: 'Liga Sistêmica',
      description: `
        <p>Ontem participei de um curso introdutório da @ligasistemica.</p>
        <p>Levando uma palestra sobre “ Pensamento Sistêmico: entendendo os conceitos para um olhar além a clínica.”</p>
        <p>Feliz por sempre contribuir com o conhecimento científico da psicologia.</p>
        <p>Parabéns a diretoria pela organização, e feliz por palestrar ao lado da @reisscarol</p>
      `,
      prefix: 'liga-sistemica',
      quantity: 3,
      type: 'jpeg',
    },
    7: {
      name: 'Curso Rorschach',
      description: `
        <p>“Multiplicando saberes, fortalecendo a prática: a sinergia como impulsionadora da nossa jornada de aprendizado.”</p>
        <p>E assim foi o curso de formação no teste de Rorscharch pelo sistema R-Pas, ministrado pela psicóloga e professora acadêmica Ignez Stephanini. </p>
        <p>Estou imensamente feliz por mais projeto que deu certo, que conseguimos sair ainda melhores, com foco no conhecimento e no crescimento através da aprendizagem.</p>
        <p>Grato por cada um que fez parte dessa turma, cada amizade que a psicologia me trouxe e cada um que é referência para mim.</p>
        <p>Com coração grato e pensando no próximo rsrs desafio é conhecimento me move.</p>
        <p>Yuri Rander</p>
        <p>Psicólogo CRP09.16202</p>
      `,
      prefix: 'curso-rorschach',
      quantity: 5,
      type: 'jpeg',
    },
    8: {
      name: 'Psicólogo Jurídico',
      description: `
        <p>🎓📚 Tive a honra de ministrar uma aula sobre a atuação do psicólogo jurídico na área do trabalho, a convite da professora Dra. Analice Vinhal, no Instituto Goiano do Direito (IGD).</p>
        <p>Uma troca rica com estudantes de Direito, refletindo sobre os desafios da perícia, os laudos, e a interface ética e técnica entre Psicologia e Justiça do Trabalho. ⚖️🧠</p>
        <p>Grato pela acolhida e pela oportunidade de contribuir com a formação de futuros profissionais comprometidos com a saúde e os direitos no ambiente laboral!</p>
        <p>#PsicologiaJurídica #PsicologiaDoTrabalho #DireitoDoTrabalho #YuriRander #PsicólogoJurídico #IGD #formacaointerdisciplinar #psiyurirander #yuriranderpsicologo</p>
      `,
      prefix: 'psicologo-juridico',
      quantity: 3,
      type: 'jpeg',
    },
    9: {
      name: '11ª Feira da Psicologia',
      description: `
        <p>🎥✨ #euvim e estive presente na 11ª Feira da Psicologia – um verdadeiro hub de soluções e conexões para quem vive a psicologia na prática!</p>
        <p>Foram momentos de muito aprendizado, trocas riquíssimas e reflexões sobre gestão clínica, inovação e fortalecimento da nossa atuação profissional. 💼🧠</p>
        <p>🔹 Psicologia que transforma.</p>
        <p>🔹 Psicologia que empreende.</p>
        <p>🔹 Psicologia que constrói saúde mental com responsabilidade e excelência.</p>
        <p>Seguimos guiando caminhos confiáveis para a saúde mental no Brasil! 💙</p>
        <p>#FeiraDaPsicologia #PsicologiaEmpreendedora #SaúdeMental #YuriRander #PsicologiaJurídica #ClínicaPsicológica #EventosDePsicologia</p>
      `,
      prefix: '11-feira-da-psicologia',
      quantity: 6,
      type: 'jpeg',
    },
  };

  for (const key in eventData) {
    const event = eventData[key];
    $('.event__slider .swiper-wrapper').append(
      `
      <div class="swiper-slide">
        <div class="card card__evento">
          <div class="card-header">
            <figure>
              <img
                src="${getEventImage(event, 1)}"
                alt="${event.name}">
            </figure>
          </div>
          <div class="card-body">
            <h3>${event.name}</h3>
            <p>
              ${event.description.length > 100 ? event.description.substring(0, 100) + '...' : event.description}
            </p>
            <button class="btn-reset btn-sm mt-3" data-bs-toggle="modal" data-bs-target="#modalEvent"
              data-event-num="${key}">
              Saiba mais
            </button>
          </div>
        </div>
      </div>
    `
    );
  }

  // Event Carrousel
  new Swiper('.event__slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 2000,
    },
    pagination: {
      el: '.swiper-event-pagination',
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });
  // Event Carrousel

  // Modal Event
  const $modalEvent = $('#modalEvent');

  $('body').on('click', '[data-bs-target="#modalEvent"]', function () {
    const event = eventData[$(this).attr('data-event-num')];

    $modalEvent.find('.modal-title, .modal__event--content--title').text(event.name);
    $modalEvent.find('.modal__event--content--description').html(event.description);

    const $swiperWrapper = $modalEvent.find('.swiper-wrapper');
    $swiperWrapper.empty();

    for (let i = 1; i <= event.quantity; i++) {
      $swiperWrapper.append(
        `
          <div class="swiper-slide">
            <div class="event__image--wrapper">
              <figure>
                <img src="${getEventImage(event, i)}" alt="${event.name}">
              </figure>
            </div>
          </div>
        `
      );
    }

    eventSwiper.update();
    eventSwiper.slideTo(0);
  });

  var eventSwiper = new Swiper('.modal_event_slider', {
    slidesPerView: 1,
    loop: false,
    pagination: {
      el: '.swiper-modal-event-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-modal-event-button-next',
      prevEl: '.swiper-modal-event-button-prev',
    },
  });
});

function getEventImage(event, index) {
  return `../img/eventos/${event.prefix}/${event.prefix}-${index}.${event.type ?? 'jpeg'}`;
}
