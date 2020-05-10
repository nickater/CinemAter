import * as functions from 'firebase-functions';
import * as firebase from 'firebase-admin';
import { titleCase } from 'title-case';

const accountSid = 'AC9331952f587e06e752d8678a1f9aafab';
const authToken = 'b22986f43ceee44908911e4e0ee0c732';
const twilio = require('twilio')(accountSid, authToken);

firebase.initializeApp();
export const addMovie = functions.https.onRequest((request, response) => {
  const name = {
    type: 'movie',
    name: request.query.name,
    priority: request.query.priority || 'low',
    downloaded: false,
    dateDownloaded: null,
  };
  firebase
    .firestore()
    .collection('movies')
    .add(name)
    .then(() =>
      response.send({
        status: 'success',
      })
    )
    .catch((err) => console.error('Failure'));
});
export const addTvShow = functions.https.onRequest((request, response) => {
  const name = {
    type: 'tv show',
    name: request.query.name,
    priority: request.query.priority || 'low',
    downloaded: false,
    dateDownloaded: null,
  };
  firebase
    .firestore()
    .collection('tvShows')
    .add(name)
    .then(() =>
      response.send({
        status: 'success',
      })
    )
    .catch((err) => console.error('Failure'));
});
export const listMovies = functions.https.onRequest((request, response) => {
  const movies: Media[] = [];
  firebase
    .firestore()
    .collection('movies')
    .get()
    .then((res) => {
      res.forEach((doc: any) => {
        movies.push(doc.data());
      });
    })
    .then(() => {
      response.send(movies);
    })
    .catch((err) => console.error(err));
});

export const queuedMovie = functions.firestore
  .document('movies/{id}')
  .onCreate(async (event, context) => {
    const itemDataSnap = await event.ref.get();
    const afs = firebase.firestore();
    const movieData = itemDataSnap.data();
    console.log('MOVIE DATA', movieData);
    if (movieData && movieData.notify) {
      if (movieData.carrier === '') {
        return afs
          .collection('mail')
          .add({
            to: [movieData.contact],
            message: {
              subject: `Your ${movieData.type} has been added to the queue`,
              html: `Thanks for adding ${titleCase(
                movieData.name
              )} to our ever-growing library! We'll notify 
              you once it has been added to the Cinemater Plex Media Server.`,
            },
          })
          .then(() => console.log('Email queued for delivery!'));
      } else {
        return afs
          .collection('mail')
          .add({
            to: [movieData.contact],
            message: {
              subject: `Thanks for adding ${titleCase(
                movieData.name
              )} to our ever-growing library! We'll notify 
            you once it has been added to the Cinemater Plex Media Server.`,
              html: '',
            },
          })
          .then(() =>
            console.log(`Text to ${movieData.contact} queued for delivery!`)
          );
      }
    }
  });

interface Media {
  id?: string;
  type: 'movie' | 'tv-show';
  name: string;
  priority: string;
  downloaded: boolean;
  dateDownloaded: Date;
  notify?: boolean;
  contact?: string;
  carrier?: string;
}

export const sendInitialText = functions.https.onRequest(
  (request, response) => {
    twilio.messages
      .create({
        body: 'This is a test',
        from: '+18646511729',
        to: '+17406564778',
      })
      .then((message: { sid: any }) => console.log(message.sid)).catch;
  }
);
