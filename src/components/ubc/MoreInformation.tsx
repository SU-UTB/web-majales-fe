import { MAJALES_DATE } from '../../config/constants';
import { ExternalLink } from '../shared/ExternalLink';
import { SectionContainer } from '../shared/SectionContainer';
import { MoreInfoPart } from './MoreInfoPart';

export const MoreInformation = () => {
  return (
    <SectionContainer id="vic-informaci">
      <div className="space-y-8 max-w-screen-md">
        <MoreInfoPart title="Jak se zúčastnit?">
          <p>Pro účast v&nbsp;soutěži stačí splnit několik jednoduchých podmínek.</p>
          <ol className="list-decimal list-outside pl-4">
            <li>Kapela musí mít alespoň jednoho člena, který je studentem.</li>
            <li>
              Kapela musí hrát vlastní autorskou tvorbu. Nehledáme žádné covery nebo podobné interpretace – hledáme
              originalitu a&nbsp;váš jedinečný hudební projev.
            </li>
            <li>Vystoupení musí být na&nbsp;živé nástroje.</li>
          </ol>
          <p>
            Splňujete všechny podmínky? Tak už se zbývá jen přihlásit. Pro letošní ročník již registrace skončili
            a&nbsp; mezi nimi se skrývá i&nbsp;letošní vítěz, ale nezapomeň sledovat UniBand Contest, ať nepropásneš
            registrace pro rok {MAJALES_DATE.getFullYear()}. Více informací na&nbsp;webu&nbsp;
            <ExternalLink link="https://unibandcontest.cz/" text="unibandcontest.cz" className="underline" />.
          </p>
        </MoreInfoPart>
        <MoreInfoPart title="Lokální a Semifinálové kolo">
          <p>
            Prvním krokem k&nbsp;účasti v&nbsp;soutěži je úspěšné absolvování lokálního kola ve&nbsp;Zlíně. Vítězná
            kapela z&nbsp;této fáze postoupí do semifinálového kola, kde se střetne s&nbsp;ostatními talentovanými
            interprety.
          </p>
          <p>
            Lokální kolo se již uskutečnilo 5. března 2024 ve Zlíně a&nbsp;my známe našeho výherce, kterého posíláme
            bojovat dál. Více informací najdete na&nbsp;události na&nbsp;Facebooku.
          </p>
        </MoreInfoPart>
        <MoreInfoPart title="Finálové kolo">
          <p>
            Po úspěšném absolvování předchozích kol soutěže postupuje kapela do celorepublikového kola, kde se střetne
            s&nbsp;elitní konkurencí. Do této fáze soutěže postupují pouze ti nejlepší, což zajišťuje vysokou úroveň
            hudebního talentu a&nbsp;kvality v&nbsp;každém vystoupení.
          </p>
          <p>
            Vítězná kapela získá titul a&nbsp;bude hrát na&nbsp;studentských Majálesech v&nbsp;Ostravě, Brně
            a&nbsp;Zlíně. 
          </p>
        </MoreInfoPart>
        <p>
          Více informací a&nbsp;registrace najdete na&nbsp;webu&nbsp;
          <ExternalLink link="https://unibandcontest.cz/" text="unibandcontest.cz" className="underline" />
        </p>
      </div>
    </SectionContainer>
  );
};
