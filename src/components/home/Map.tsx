export const Map = () => {
  return (
    <div className="bg-orange w-full">
      <div className="w-full xl:w-4/5 mx-auto px-4 py-8 xl:py-16">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.522400055535!2d17.655902676379913!3d49.228584071384745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47130d008c519ab7%3A0x985e4cfd1e8349ae!2sPark%20u%20Ba%C5%A5ovy%20vily!5e0!3m2!1scs!2scz!4v1765310263503!5m2!1scs!2scz"
          width="100%"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-2xl"
          title="Kde nás najdete - mapa"
        />
      </div>
    </div>
  );
};
