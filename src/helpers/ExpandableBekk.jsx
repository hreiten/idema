import React from 'react';

const expandableTextHeader = styled.div`
  border: none;
  box-shadow: none;
  background: #000 none;
  color: #fff;
  margin-top: 0.5em;
  width: 100%;
  font-family: FFDINWebProLight;
`;

const expandableListHeader = styled.h2`
  color: #b3b3b3;
  font-family: FFDINWebProLight;
  margin-bottom: 0.6em;
`;

const expandableText = styled.p`
  cursor: text;
  min-height: 50px !important;
`;

const expandableItemButton = styled.button`
  line-height: 1.35;
  padding: 0.5em 0;
  background: inherit;
  font-size: inherit;
  font-family: inherit;
  color: #fff;
  text-align: start;
  border: none;
  width: 100%;
  transition: color 0.3s cubic-bezier(0.77, 0.3, 0.39, 0.9);
  background-color: #000;

  @media (min-width: 75rem) {
    .expandableItemButton {
      line-height: 1.45;
      padding: 0.3em 0;
    }
  }
`;

const Expandable = () => {
  <section>
    <expandableListHeader></expandableListHeader>
    <ul>
      <li class="expandableListItemContainer">
        <button class="expandableItemButton expanded">
          <span class="text">Fagdager</span>
        </button>
        <div class="expandableItemText" aria-hidden="false" style="max-height: 239px;">
          <p class="text">
            <span class="Linkify">
              Tre ganger i året arrangerer vi vår egen lille en-dags konferanse. Av og for ansatte i Bekk. På en normal
              fagdag kan du velge mellom drøyt 100 foredrag og et titalls ulike workshops, hvor de ansatte deler og
              evangiliserer ting de brenner for. Litt spøkefullt sier vi at konferansen er på høyde med de beste i
              utlandet.
            </span>
          </p>
        </div>
      </li>
      <li class="expandableListItemContainer">
        <button class="expandableItemButton">
          <span class="text">Faggrupper</span>
        </button>
        <div class="expandableItemText" aria-hidden="true" style="max-height: 0px;">
          <div class="paragraphs">
            <p class="text">
              <span class="Linkify">
                Hvert år legger vi kabalen på nytt: Hvilke faggrupper trenger vi og hvem vil ta ansvaret? Faggrupper er
                en av de viktigste arenaene i Bekk. Vi har et tyvetalls grupper og de fungerer som et tverrfaglig
                interessefelleskap hvor alle ansatte deltar.{' '}
              </span>
            </p>
            <p class="text">
              <span class="Linkify">
                Faggruppene blir til gjennom en slags demokratisk prosess, hvor alle står fritt til å foreslå et tema.
                De temaene som skaper størst entusiasme blant de ansatte ender opp som faggrupper påfølgende år. I 2018
                har vi grupper som fokuserer på temaer som maskinlæring, tverrfaglig strategiutvikling, design av
                AI-tjenester, digital produktutvikling, React, containerteknologi, digitale forretningsmodeller, Elm,
                javascript og funksjonell programmering. Og mere til.
              </span>
            </p>
          </div>
        </div>
      </li>
      <li class="expandableListItemContainer">
        <button class="expandableItemButton">
          <span class="text">Konferanser og fagturer</span>
        </button>
        <div class="expandableItemText" aria-hidden="true" style="max-height: 0px;">
          <p class="text">
            <span class="Linkify">
              Kompetansebygging ligger i ryggraden vår. Det er vår strategi, det er slik vi gjør oss konkurransedyktige.
              Vi har derfor rause ordninger for å bli klokere. Å reise på konferanse, enten i Norge eller utlandet, er
              en del av dette. Selvfølgelig er det frivillig og du styrer i stor grad hvor du vil dra selv.
            </span>
          </p>
        </div>
      </li>
      <li class="expandableListItemContainer">
        <button class="expandableItemButton">
          <span class="text">Show &amp; Tell 👀</span>
        </button>
        <div class="expandableItemText" aria-hidden="true" style="max-height: 0px;">
          <p class="text">
            <span class="Linkify">
              Det gjøres mye godt arbeid i Bekk, arbeid man kan lære mye av. «Show &amp; Tell» er en intern arena for
              deling av arbeid, tanker, løsninger og trender. Hver 14. dag møter man likesinnede og diskuterer
              problemstillinger man jobber med på tvers av prosjekter. Målet er todelt: hygge og faglig sparring. Som
              regel oppnår man begge deler.
            </span>
          </p>
        </div>
      </li>
      <li class="expandableListItemContainer">
        <button class="expandableItemButton">
          <span class="text">Pils og programmering</span>
        </button>
        <div class="expandableItemText" aria-hidden="true" style="max-height: 0px;">
          <div class="paragraphs">
            <p class="text">
              <span class="Linkify">
                «Pils og programmering» er et enkelt konsept: en samling for folk som liker å ta et par pils mens de
                progger i godt lag. Ta med deg maskinen og en idé du bryr deg om, og slipp skaperevnen løs blant
                likesinnede. Bli inspirert av hva andre jobber på, få feedback på dine egne prosjekter og ha en hyggelig
                kveld med andre flinke fagfolk.{' '}
              </span>
            </p>
            <p class="text">
              <span class="Linkify">
                Og selvfølgelig, du trenger ikke drikke pils. Du får også alkoholfritt og brus. Og mat.
              </span>
            </p>
          </div>
        </div>
      </li>
      <li class="expandableListItemContainer">
        <button class="expandableItemButton">
          <span class="text">Fritidsaktiviteter</span>
        </button>
        <div class="expandableItemText" aria-hidden="true" style="max-height: 0px;">
          <p class="text">
            <span class="Linkify">
              I Bekk finner du et bredt tilbud av ulike treningstilbud og aktiviteter. Kropp og sjel. Om du vil kan du
              spille squash, fotball, innebandy, klatre, dra på utstillinger og konserter, stå og gå på ski, dra på
              topptur eller surfetur til Lofoten osv. Mesteparten av aktivitetene dekkes av Bekk, enkelte betaler man
              delvis selv. Vi har også et eget treningsbudsjett som du kan bruke til medlemskapet i treningsstudioet
              eller fotballklubben du er med i, og vi har bedriftsavtaler med Sats Elixia og Barry's Bootcamp.
            </span>
          </p>
        </div>
      </li>
    </ul>
  </section>;
};
