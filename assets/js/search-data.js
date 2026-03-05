// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-informs-annual-meeting-presentation-on-fedspallm",
          title: 'INFORMS Annual Meeting. Presentation on FedSpaLLM,.',
          description: "",
          section: "News",},{id: "news-paper-accepted-sparsellm-towards-global-pruning-for-pretrained-language-models-accepted-at-neurips-2024",
          title: 'Paper accepted: SparseLLM: Towards global pruning for pretrained language models. Accepted at NeurIPS...',
          description: "",
          section: "News",},{id: "news-received-grant-doe-ldrd-grant-awarded-foundation-model-for-coherent-x-ray-imaging-co-pi",
          title: 'Received grant: DOE LDRD Grant Awarded. Foundation Model for Coherent X-ray Imaging, co-PI....',
          description: "",
          section: "News",},{id: "news-paper-accepted-fedspallm-federated-pruning-of-large-language-models-accepted-at-naacl-2025",
          title: 'Paper accepted: **FedSpaLLM: Federated pruning of large language models **. Accepted at NAACL...',
          description: "",
          section: "News",},{id: "news-informs-annual-meeting-presentation-on-scaling-federated-learning-to-hpc",
          title: 'INFORMS Annual Meeting. Presentation on Scaling Federated Learning to HPC.',
          description: "",
          section: "News",},{id: "news-lumina-a-grid-foundation-model-for-benchmarking-ac-optimal-power-flow-surrogate-learning-talk-at-5th-gridfm-workshop-upcoming",
          title: 'LUMINA: A Grid Foundation Model for Benchmarking AC Optimal Power Flow Surrogate Learning....',
          description: "",
          section: "News",},{id: "news-paper-accepted-lumina-foundation-models-for-topology-transferable-acopf-accepted-at-iclr-2026-workshop-on-foundation-models-for-science-fm4science",
          title: 'Paper accepted: LUMINA: Foundation Models for Topology Transferable ACOPF. Accepted at ICLR 2026...',
          description: "",
          section: "News",},{id: "news-towards-scalable-federated-learning-for-scientific-computing-lans-seminar-argonne-national-laboratory-upcoming",
          title: 'Towards Scalable Federated Learning for Scientific Computing. LANS Seminar, Argonne National Laboratory. (upcoming)...',
          description: "",
          section: "News",},{id: "news-preparing-for-job-market-academia-industry-and-national-labs-panelist-at-iise-annual-conference-and-expo-2026-upcoming",
          title: 'Preparing for Job Market (Academia, Industry, and National Labs). Panelist at IISE Annual...',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
