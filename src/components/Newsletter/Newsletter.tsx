import { Button } from "../UI/button";

const Newsletter = () => {
  return (
    <section className="bg-zinc-500 py-8">
      <div className="container md:w-3/4">
        <h3 className="h3 mb-2 uppercase text-slate-100">Inspirate</h3>
        <p className="mb-8 text-slate-100">
          Suscribite al newsletter y sé el primero en enterarte de las últimas
          novedades y experiencias que tenemos para brindarte dentro del lujo
          global.
        </p>

        <div className="mx-auto flex flex-col justify-center gap-4 sm:flex-row">
          <input
            type="text"
            className="w-full rounded-full p-2 px-4"
            placeholder="Ingresá tu correo electrónico"
          />
          <Button variant="outline" className="rounded-full px-12 uppercase">
            Suscribirme
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
