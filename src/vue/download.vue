<template>
    <div>
        <div v-for="(item, id) in items" :key="id">
            {{id}}: {{item.href}}
            <button class="btn btn-primary" @click="deleteitem(id)">Delete</button>
            <a class="btn btn-primary" v-if="item.blob" :href="item.blob" download="">Download</a>
        </div>

        <button class="btn btn-primary" data-toggle="modal" data-target="#modal-download-form">Add</button>

        <div class="modal fade" id="modal-download-form" tabindex="-1">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Add file</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label for="file-src" class="col-form-label">File source:</label>
                                <input type="text" class="form-control" id="file-src" v-model="filename">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" @click="createitem()">Send message</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    let downloader = {
        data() {
            return {
                items: [],
                files: [],
                filename: ""
            }

        },
        methods: {
            async downloadfromsite(src, id) {
                this.files[id] = null;
                let response;

                try {
                    response = await fetch(src);
                }
                catch (err) {
                    alert("Error");
                    deleteitem(id);
                    return;
                }

                if (response.ok && this.files[id] === null) {
                    this.files[id] = response.blob();
                }

                return URL.createObjectURL(this.files[id]);
            },

            deleteitem(id) {
                this.items.splice(id, 1);
                this.files.splice(id, 1);
            },

            deleteItemError(id) {
                this.deleteitem(id);
                alert("Error");
            },

            createitem() {
                self = this;

                let id = this.items.length;
                this.items.push({
                    href: this.filename,
                    blob: null
                });

                this.files[id] = null;

                fetch(this.filename).then(function (response) {
                    if (response.ok && self.files[id] === null) {
                        self.files[id] = response.blob();
                    }
                    else if (self.files[id] !== null) {
                        console.log("Deleted");
                    }
                    else {
                        throw new Error;
                    }
                }).catch(alert("error"));
            }
        }
    };



    export default downloader;
</script>