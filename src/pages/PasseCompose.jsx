import React, { useState } from 'react';

const PasseCompose = () => {
    const [showEtre, setShowEtre] = useState(false);
    const [isClicked, setClicked] = useState(false);
    const show = () => {
        setShowEtre(!showEtre);
    }
    const showAvoir = () => {
        setClicked(!isClicked);
    }
    return (
        <>
            <h1>Le temps Passé Composé</h1>
            <p>Le temps passé composé est un temps du passé en français. On l'utilise pour exprimer une action achevée dans le passé,
                souvent associée à un moment précis ou à une durée spécifique. Pour former le passé composé, on a besoin de deux éléments:
                l'auxiliaire (<a href='#' onClick={showAvoir}>avoir</a> ou <a href='#' onClick={show}>être</a>) et le participe passé du verbe.</p>
            {isClicked && <p>Le passé composé avec l'auxiliaire "avoir" s'utilise pour la plupart des verbes. </p>}
            {showEtre && <p>
                Le passé composé avec l'auxiliaire "être" s'utilise principalement pour certains <strong>verbes de mouvement</strong> <br />
                (aller, marcher, monter, atteindre, déscendre, courir, voyager, venir), <br /> <strong>de changement d'état</strong> (être, avoir, savoir, croire, paraître, sentir, manquer, aimer), <br />
                ou pour <strong>les verbes pronominaux</strong> (se laver, se lever, se coucher, etc.)</p>}
            <h4>Une action totalement terminé.</h4>
            Je suis né en 2002.
            <h4>Une succession <h4>Une action totalement terminé.</h4>d'action.</h4>
            Hier, je suis rentré dans un Bar, puis j'ai pris deux verre de bierres et enfin je suis été soulle.
            <h4>Une action limité dans le temps.</h4>
            Ils ont habité à Bankok pendant 3ans.
            <h4>Une action qui a eu lieu avant le présent.</h4>
            Tout à l'heure, il est passé chez nous.
        </>
    )
}
export default PasseCompose;