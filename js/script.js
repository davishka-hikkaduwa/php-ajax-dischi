console.log('JS OK!');

const app = new Vue({
    el: '#app',
    data() {
        return {
            albums: [],
            filter: '',
        };
    },
    mounted() {
        this.getAlbums('');
    },
    methods: {
        getAlbums() {
            axios.get('php-ajax-dischi/api/albums.php?filter=' + this.filter)
                .then((response) => {
                    if (response.status === 200) {
                        this.albums = response.data;
                    }
                })
                .catch(e => console.log(e))
        }
    }
});