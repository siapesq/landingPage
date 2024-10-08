import React from "react";
import Card from "../../components/common/card";
import satelite from "../../imgs/satelite.svg"
import lupa from "../../imgs/lupa.svg";
import mapa from "../../imgs/mapa.svg";
export default function SectionHelps() {


    return (

        <section className="helps">
            <div className="helps_container">
                <article className="helps_article">
                    <h2 className="title">
                        Como a SIAPESQ pode te ajudar?
                    </h2>
                    <p className="content">
                        Veja nossa variedade de benefícios
                    </p>
                </article>
                <div className="cards">
                    <Card
                        id="card-1"
                        photo={satelite}
                        title="Monitoramento Satelital"
                        content="Utilizamos satélites para entregar aos nossos clientes informações precisas, e em tempo real"
                    />
                    <Card
                        id="card-2"
                        photo={lupa}
                        title="Análise Ambiental"
                        content="Baixe nossas predições, e faça o uso offline de onde vocês estiver pelo seu computador"
                    />
                    <Card
                        id="card-3"
                        photo={mapa}
                        title="Predição"
                        content="Através de modelos preditivos, trazemos segurança, resiliência e sustentabilidade para os processos produtivos"
                    />
                </div>
            </div>
            <h3>
                Conheça nossos produtos
            </h3>
        </section>

    )
}




