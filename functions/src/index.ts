import * as functions from 'firebase-functions';
import * as firebase from 'firebase-admin';
firebase.initializeApp();

exports.addMovie = functions.https.onRequest((request, response) => {
  const name = {
    type: 'movie',
    name: request.query.name,
    priority: request.query.priority || 'low',
    downloaded: false,
    dateDownloaded: null
  };

  firebase
    .firestore()
    .collection('movies')
    .add(name)
    .then(() =>
      response.send({
        status: 'success'
      })
    )
    .catch((err) => console.error('Failure'));
});

exports.addTvShow = functions.https.onRequest((request, response) => {
  const name = {
    type: 'tv show',
    name: request.query.name,
    priority: request.query.priority || 'low',
    downloaded: false,
    dateDownloaded: null
  };

  firebase
    .firestore()
    .collection('tvShows')
    .add(name)
    .then(() =>
      response.send({
        status: 'success'
      })
    )
    .catch((err) => console.error('Failure'));
});

exports.listMovies = functions.https.onRequest((request, response) => {
  const movies: FirebaseFirestore.DocumentData[] = [];
  firebase
    .firestore()
    .collection('movies')
    .get()
    .then((res) => {
      res.forEach((doc) => {
        movies.push(doc.data());
      });
    })
    .then(() => {
      response.send(movies);
    })
    .catch((err) => console.error(err));
});
