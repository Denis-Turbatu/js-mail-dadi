# SOLUZIONE MAIL

```
Mail

Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
```

### RACCOLTA DATI

> Nessun dato visto che i dati sono generati automaticamente

### ESECUZIONE LOGICA

- [x] Dichiariamo una variabile e con il prompt prendiamo la mail dell'utente
- [x] Dichiariamo l'array di mail verificate
- [x] Dichiarare variabile flag per vedere se l'email è stata trovata
- [x] Ciclo for per scorrere l'array
- [x] if statement per verificare la mail corretta

```
if (trovato) {
    stampa successo
} else {
    stampa errore
}
```

### OUTPUT

- [x] Nell'if stampare errore o successo in base al confronto

# SOLUZIONE DADI

Gioco dei dadi

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?

### RACCOLTA DATI

> Nessun dato visto che i dati sono generati automaticamente

### ESECUZIONE LOGICA

- [x] Dichiarazione variabili per estrarre gli elementi HTML necessari e variabili per immagazzinare i valori random della funzione Math.random() per Utente e PC
- [x] Assegnazione con .innerHTML per inserire il testo per identificare Utente e PC

### OUTPUT

- [x] if statement per poter stampare in modo corretto il risultato del gioco

```
Se (numero utente > numero pc){
    stampa hai vinto
}Se altrimenti(numero < numero pc) {
    stampa hai perso
}Altrimenti {
    stampa pareggio
}
```
