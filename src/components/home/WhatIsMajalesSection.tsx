import { MAJALES_DATE } from '../../config/constants';
import { Container } from '../shared/Container';
import { MajalesHeadline } from '../svg/MajalesHeadline';

import { ArrowLeftBottom } from '../svg/elements/ArrowLeftBottom';
import { CheckerRectangle } from '../svg/elements/CheckerRectangle';
import { CheckerTriangleTransparent } from '../svg/elements/CheckerTriangleTransparent';
import { OrangeTriangle } from '../svg/elements/OrangeTriangle';
import { SquareWithCircle } from '../svg/elements/SquareWithCircle';
import { WhiteTriangle } from '../svg/elements/WhiteTriangle';
import { PinkTriangle } from '../svg/elements/PinkTriangle';


import { CheckerSquare } from '../svg/elements/CheckerSquare';
import { BlueTriangle } from '../svg/elements/BlueTriangle';
import { ArrowRightBottom } from '../svg/elements/ArrowRightBottom';
import { PurpleRectangle } from '../svg/elements/PurpleRectangle';
import { HalfTransparentRedTriangle2X } from '../svg/elements/HalfTransparentRedTriangle2X';

export const WhatIsMajalesSection = () => {
  return (
    <section
      id="co-je-majales"
      className="pt-12 pb-24 md:pb-32 xl:py-24 bg-no-repeat relative"
    >
        <div className="flex flex-col items-center space-y-6 justify-center text-center pt-12 md:pt-20 px-16 md:px-36">
            <p className="w-full text-left">
                Jedná se o studenty pořádaný multižánrový open-air festival s nabitým programem 
                pro všechny věkové kategorie!
            </p>      
            <p className="w-full text-left">
                Těšit se můžete na dvě stage plné živé hudby, Chill-out zónu, Food zónu a 
                nadupaný doprovodný program, ať už přímo v den D nebo i v týdnech před 
                samotnou akcí.
            </p>
            <p className="w-full text-left">
                Projděte se s námi centrem Zlína v prvomájovém průvodu, zapojte se do soutěže 
                kapel UNIBAND CONTEST, díky které si zahrajete na studentských Majálesech v Brně, 
                Ostravě a ve Zlíně nebo si třeba v den Majálesu vybojujte královský titul.
            </p>
            <p className="w-full text-left">
                Zní to dobře, co? Těšíme se na vás už 3. května v parku před Baťovou vilou.
            </p>
        </div>
        {/* TOP LEFT */}
        <div className="absolute top-0 left-0">
            <div className="relative">
            <ArrowRightBottom className="h-12 md:h-24" />
            <CheckerSquare className="absolute top-12 md:top-24 h-12 md:h-24" />
            <BlueTriangle className="absolute top-24 md:top-48 h-12 md:h-24" />
            <PurpleRectangle className="absolute top-0 md:top-0 left-12 md:left-24 h-12 md:h-24 w-52 md:w-72 overflow-y-hidden">
                <h2 className="text-h2-reversed-mobile md:text-h2-reversed text-white">
                Co je Majáles UTB?
                </h2>
            </PurpleRectangle>
            <WhiteTriangle className="absolute top-0 md:top-0 left-64 md:left-96 h-12 md:h-24 -rotate-90" />
            </div>
        </div>
        {/* BOTTOM RIGHT */}
        <div className="absolute bottom-0 right-0">
            <div className="relative">
            <HalfTransparentRedTriangle2X className="h-24 md:h-48" />
            </div>
        </div>
    </section>
  );
};