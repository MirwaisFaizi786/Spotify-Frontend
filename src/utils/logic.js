import history from "./h.json"

export function getTotalPlayedSongs() {
    let count = 0
    for(let song of history){
        if(song.master_metadata_track_name !== null){
            count += 1
        }
    }
    return count
}
export function getAllAlbums() {
   return history.map((song) => song.master_metadata_album_album_name)
}
export function totalListeningTimeSongs() {
    const miliseconds = history.reduce((acc, song) => acc + song.ms_played, 0)
   
    return Math.floor(miliseconds / 1000 / 60 / 60)
}

export function totalListenedSongs() {

    const numberOfSongs = {}
    for( let song of history){
        if(song.reason_end === "trackdone"){
            numberOfSongs[song.master_metadata_track_name] = 
            numberOfSongs[song.master_metadata_track_name] ? 
            numberOfSongs[song.master_metadata_track_name]  : 1
        }
    }
    
    return Object.values(numberOfSongs).reduce((acc, val) => acc + val, 0)
}

// {
//     "_id": {
//       "$oid": "65b0306e4146088749465e39"
//     },
//     "ts": "2020-06-01T15:02:59Z",
//     "ms_played": 224718,
//     "master_metadata_track_name": "Antidote",
//     "master_metadata_album_artist_name": "Travis Scott",
//     "master_metadata_album_album_name": "Rodeo",
//     "episode_name": null,
//     "episode_show_name": null,
//     "reason_start": "clickrow",
//     "reason_end": "fwdbtn",
//     "shuffle": true,
//     "skipped": null
//   },