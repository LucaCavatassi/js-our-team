# DESCRIZIONE
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.

Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	            scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg


### MILESTONE 1
>Creare l’array di oggetti con le informazioni fornite.
### MILESTONE 2
>Stampare su console le informazioni di nome, ruolo e la stringa della foto per ogni membro del team
### MILESTONE 3
>Stampare le stesse informazioni su DOM sottoforma di stringhe
### BONUS 1 
>Trasformare la stringa foto in una immagine effettiva
### BONUS 2
>Organizzare i singoli membri in card/schede. Se non vi sentite particolarmente creativi, potete prendere uno spunto dallo screenshot allegato.

## Svolgimento 

### M1 
- [X] Creo oggetto con chiavi - Nome, Ruolo, Foto
- [X] Metto gli oggetti in un array

### M2 
- [X] Creo un ciclo for che mi prende uno ad uno gli elementi dell'array
- [X] Per ogni elemento singolo stampo name, surname, role, image

### M3
- [X] Creo 1 Div All Members
- [X] Riprendo il ciclo for che mi prente uno ad uno gli elementi dell'object array
- [X] Assegno una variabile curElem all'elemento corrente
- [X] Al div all members metto inner html tutta la struttura html con i div etc..

### B1 
- [X] Uso il tag img e quando arrivo a src= aggiungo ${curElem.immagine}

### B2
- [X] Vediamo se mi ricordo come funziona CSS