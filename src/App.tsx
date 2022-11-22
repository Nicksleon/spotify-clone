import { LeftBar } from "./components/LeftBar";
import { TopBar } from "./components/TopBar";
import { PlaylistCard } from "./components/PlaylistCard";
import { MixesCard } from "./components/MixesCard";
import { RecentCard } from "./components/RecentCard";
import { Player } from "./components/Player";

export interface HomeProps {
  text?: string;
  img?: string;
  title?: string;
  color?: string;
}

export function App() {
  function handleHour() {
    Date();
  }

  return (
    <div className="max-w-full scrollbar-none">
      <Player />

      <div className="h-screen scrollbar scrollbar-track-transparent scrollbar-thumb-neutral-600">
        <LeftBar />
        <TopBar />

        <div className="ml-60 pt-16  p-8 bg-gradient-to-t from-neutral-1000 via-blue-1000 to-blue-1000  ">
          <h1 className="text-white font-bold text-3xl mb-5 mt-4">Boa tarde</h1>

          <div className="grid grid-cols-3 gap-5 ">
            <PlaylistCard text="Metalica" img="./img/metalica.jpg" />
            <PlaylistCard text="Neffex" img="./img/neffex.jpg" />
            <PlaylistCard
              text="Three Days Grace"
              img="./img/three-days-grace.jpg"
            />
            <PlaylistCard
              text="Charlie Brown Jr."
              img="./img/charlie-brown-jr.jpg"
            />
            <PlaylistCard text="ConeCrewDiretoria" img="./img/cone-crew.jpg" />

            <PlaylistCard text="Costa Gold" img="./img/costa-gold.jpg" />
          </div>
        </div>

        <div className="bg-neutral-1000 ml-60 pb-28 px-8">
          <h2 className="text-white font-bold text-2xl mb-5">
            Seus mixes mais ouvidos
          </h2>

          <div className="flex justify-between mb-10">
            <MixesCard
              title="Mix rock"
              text="Trapt, Alice In Chains, Ozzy Osbourne e mais"
              img="./img/slash.jpg"
              color="border-lime-200"
            />
            <MixesCard
              title="Mix metal"
              text="Dio, Korn, Five Finger Death Punch e mais"
              img="./img/metal.jpg"
              color="border-red-200"
            />
            <MixesCard
              title="Mix de Turma do..."
              text="Grupo Revelação, Exaltasamba, Péricles..."
              img="./img/turma-do-pagode.jpg"
              color="border-red-200"
            />
            <MixesCard
              title="Mix MPB"
              text="kamaitachi, Supercombo, Renato..."
              img="./img/kamaitachi.jpg"
              color="border-yellow-400"
            />
            <MixesCard
              title="Mix relax"
              text="FUR, Carbon Based Lifeforms, The Walte..."
              img="./img/fur.jpg"
              color="border-green-300"
            />
            <MixesCard
              title="Mix de Three Grac..."
              text="Trapt, Alice In Chains, Ozzy Osbourne e mais"
              img="./img/three-days-grace.jpg"
              color="border-red-500"
            />
            <MixesCard
              title="Mix melancólico"
              text="YUNG LIXO, Three Days Grace, Konai e..."
              img="./img/yung-lixo.jpg"
              color="border-pink-400"
            />
            <MixesCard
              title="Mix anos 2010"
              text="kamaitachi, Three Days Grace, Vou pro..."
              img="./img/kamaitachi.jpg"
              color="border-yellow-400"
            />
          </div>

          <h2 className="text-white font-bold text-2xl mb-5">
            Tocados recentemente
          </h2>

          <div className="flex justify-between mb-10">
            <MixesCard
              title="Mix de Three Day..."
              text="Likin Park, Slipknot, Korn e mais"
              img="./img/three-days-grace.jpg"
              color="border-red-500"
            />
            <MixesCard
              title="Mix rap"
              text="Costa Gold, MC Sid, HAIKAISS e mais"
              img="./img/costa-gold.jpg"
              color="border-yellow-400"
            />
            <RecentCard
              title="Charlie Brown Jr"
              text="Artista"
              img="./img/charlie-brown-jr.jpg"
            />
            <RecentCard
              title="YUNG LIXO"
              text="Artista"
              img="./img/yung-lixo.jpg"
            />
            <RecentCard
              title="ConeCrewDiretoria"
              text="Artista"
              img="./img/cone-crew.jpg"
            />
            <MixesCard
              title="Samba Mix"
              text="Grupo Revelação, Péricles, Zeca.."
              img="./img/turma-do-pagode.jpg"
              color="border-red-200"
            />
            <MixesCard
              title="Mix rock"
              text="Trapt, Alice In Chains, Ozzy Osbourne e mais"
              img="./img/slash.jpg"
              color="border-lime-200"
            />
            <RecentCard title="FUR" text="Artista" img="./img/fur.jpg" />
          </div>

          <h2 className="text-white font-bold text-2xl mb-5">
            Seus Artistas Favoritos
          </h2>
          <div className="flex justify-between">
            <RecentCard
              title="ConeCrewDiretoria"
              text="Artista"
              img="./img/cone-crew.jpg"
            />
            <RecentCard title="FUR" text="Artista" img="./img/fur.jpg" />
            <RecentCard
              title="Charlie Brown Jr"
              text="Artista"
              img="./img/charlie-brown-jr.jpg"
            />
            <RecentCard title="PANTERA" text="Artista" img="./img/metal.jpg" />
            <RecentCard
              title="Metalica"
              text="Artista"
              img="./img/metalica.jpg"
            />
            <RecentCard title="NEFFEX" text="Artista" img="./img/neffex.jpg" />
            <RecentCard
              title="Costa Gold"
              text="Artista"
              img="./img/costa-gold.jpg"
            />
            <RecentCard
              title="Turma do Pagode"
              text="Artista"
              img="./img/turma-do-pagode.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
