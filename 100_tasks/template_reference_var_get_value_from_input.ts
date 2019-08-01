// a template reference variable.

<input type="text"
class="form-control"
placeholder="Enter the setup"
#setup>

<button type="button"
class="btn btn-primary"
(click)="createJoke(setup.value, punchline.value)">Create
</button>

createJoke(setup: string, punchline: string) {
this.jokeCreated.emit(new Joke(setup, punchline));
}
