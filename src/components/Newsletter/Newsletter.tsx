import { Button } from "../UI/button";

const Newsletter = () => {
  return (
    <section className="bg-zinc-500 py-8">
      <div className="container w-1/2">
        <h3 className="h3 mb-2 uppercase text-slate-100">Inspirate</h3>
        <p className="mb-8 text-slate-100">
          Suscribite al newsletter y sé el primero en enterarte de las últimas
          novedades y experiencias que tenemos para brindarte dentro del lujo
          global.
        </p>

        <div className="mx-auto flex justify-center gap-4">
          <input
            type="text"
            className="w-full rounded-full px-8"
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
