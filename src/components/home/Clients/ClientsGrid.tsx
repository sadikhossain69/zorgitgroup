import Title from '../../common/Title';
import clients from './data';

export default function ClientsGrid() {
  return (
    <section className="mt-6 sm:hidden">
      <Title title="our trusted clients" />
      <h5 className="px-10 text-center">Trusted by more than 50 companies all over the world.</h5>
      <div className="grid w-4/5 grid-cols-2 gap-5 mx-auto mt-10">
        {clients.map((client) => (
          <a key={client._id} href={client.url} target="_blank" rel="noreferrer">
            <div className="flex items-center justify-center h-full shadow-lg">
              <img src={client.image} className="p-2" alt="clients logo" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
