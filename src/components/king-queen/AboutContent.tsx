import { MAJALES_DATE } from "../../config/constants";

export const AboutContent = () => {
  return (
    <div className="space-y-8 max-w-2xl text-white">
      <div>
        <h1 className="text-h2-reversed">Meatfly Král a Královna Majálesu</h1>
        <p>
          Chcete zažít nezapomenutelný zážitek, soutěžit v unikátních disciplínách a získat titul Král a Královna Majálesu UTB?
          Pak neváhejte a přihlaste se společně se svým parťákem do naší jedinečné soutěže.
        </p>
      </div>
      <div>
        <h2 className="text-p-big font-semibold">Kdo se může stát Králem a Královnou?</h2>
        <p>
          Soutěžní dvojice musí být složena z muže a ženy, kteří studují 
          na jakékoliv fakultě UTB (klidně může být jeden z FT a druhý z FHS).
        </p>
      </div>
      <div>
        <h2 className="text-h2">Kde a kdy se akce koná?</h2>
        <p>Akce se uskuteční {MAJALES_DATE.toLocaleDateString('cs-CZ')} v rámci Majálesu UTB v areálu festivalu.</p>
      </div>
    </div>
  );
};
