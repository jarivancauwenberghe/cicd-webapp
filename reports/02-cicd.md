# Labverslag: Continuous Integration/Delivery met GitHub Actions

## Studenteninformatie

- Studentnaam: Jari Vancauwenberghe
- Studentcode: 221003505575

## Opdrachtbeschrijving

In deze opdracht moest ik een pipeline opzetten met GitHub Actions. Het doel was om de code te linten, een Docker image te bouwen en naar Docker Hub te pushen. Daarnaast werd verwacht dat Dependabot zou worden ingeschakeld om automatisch updates te maken wanneer dependencies verouderd zijn.

## Bewijs van het uitgevoerde werk

Hieronder volgt bewijs dat de opdracht is voltooid:

1. **GitHub repository aangemaakt voor de sample applicatie:**
   ![GitHub repository](img/github-repository.png)
   
2. **Overzicht van workflow runs in het GitHub Actions-tabblad:**
   ![GitHub Actions](img/github-actions.png)
   
3. **Docker image beschikbaar op Docker Hub:**
   ![Docker Hub image](img/dockerhub-image.png)
   
4. **Automatische build pipeline na een codewijziging:**
   ![Pipeline triggered](img/pipeline-triggered.png)
   
5. **Dependabot PR aangemaakt:**
   ![Dependabot PR](img/dependabot-pr.png)

## Evaluatiecriteria

- [x] Er is een GitHub repository voor de sample applicatie aangemaakt.
- [x] Het GitHub Actions-tabblad toont de workflow runs.
- [x] Het Docker image is beschikbaar op Docker Hub.
- [x] Er is een wijziging doorgevoerd in de sample applicatie en de pipeline is automatisch getriggerd.
- [x] Dependabot is ingeschakeld en maakt een PR wanneer er een verouderde dependency is.
- [x] Het labverslag is geschreven in Markdown en is naar de repository gepusht.
- [x] Het cheat sheet is bijgewerkt met de benodigde commando’s.

## Problemen

Tijdens het voltooien van deze opdracht heb ik de volgende problemen ondervonden:

- **Lintingfouten:** De workflow faalde eerst vanwege lintingfouten in de code. Deze fouten zijn opgelost door semicolons toe te voegen en enkele string-aanhalingstekens te corrigeren.


## Reflectie

Het was uitdagend om de juiste acties te configureren in GitHub Actions, vooral het instellen van de juiste NodeJS-versie en het oplossen van lintingfouten. Wat me opviel, is dat wanneer je eenmaal bekend bent met de syntaxis van GitHub Actions, de workflow redelijk eenvoudig te begrijpen en aan te passen is. 

Wat ik heb geleerd:
- Hoe je een CI/CD pipeline opzet met GitHub Actions.
- Het integreren van Docker en het pushen van images naar Docker Hub.
- Het gebruik van Dependabot om de dependencies up-to-date te houden.

Als ik deze opdracht opnieuw zou doen, zou ik eerder tijd besteden aan het correct configureren van de Docker workflow om tijd te besparen bij het oplossen van problemen. Het leren gebruiken van Dependabot vond ik een nuttige toevoeging om automatische updates in de toekomst te beheren.

## Bronnen

- [GitHub Actions Documentatie](https://docs.github.com/en/actions)
- [Docker Documentatie](https://docs.docker.com/)
- [Dependabot Documentatie](https://docs.github.com/en/code-security/dependabot)
  
