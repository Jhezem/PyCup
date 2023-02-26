import Head from "next/head";
import MainLayout from "../layouts/MainLayout";
import { TwoColumn } from "../shared/Cta/TwoColumn";

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Pycup</title>
        <meta name="description" content="Py Cup sitio web oficial" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TwoColumn
        subtitle="Solo los verdaderos improvisan."
        title="Freestyle Network"
        description="Entra a la nueva e innovadora red social de freestylers, comparte
              tu contenido, y ganate un puesto entre los mejores."
        buttonText="Registrate"
        img={{
          src: "/img/amongus.png",
          width: 712,
          height: 640,
          alt: "Rapper",
        }}
        imgStyles={{
          transform: "translateY(-15%)",
        }}
      />
    </MainLayout>
  );
}
