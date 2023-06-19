<template>
    <div id="BookList">
        <div class="header">
            <h1>제품 목록</h1>
            <hr />
        </div>
        <table>
            <tr><td></td><td>id</td><td>제목</td><td>저자</td><td>가격</td></tr>
            <tr v-for="book in books" v-bind:key="book.id" v-on:click="goEdit(book.id)">
                <td><input type="checkbox"  /></td>
                <td>{{ book.id }}</td>
                <td>{{ book.title }}</td>
                <td>{{ book.author }}</td>
                <td>{{ book.price }}</td>
            </tr>
        </table>
        <p>합계 : </p>
        <button type="button" @click="goEdit(0)">등록</button>
        <button type="button">새로고침</button>
        <button type="button" @click="remove">삭제</button>
    </div>
</template>

<script>
import { loadBooks, deleteBook } from '../bookService'; 

export default {
    name: "BookList", 
    data() {
        return {
            books: [ ]
        }
    },
    async mounted() {
        this.books = await loadBooks();
    }, 
    methods: {
        goEdit(id) {
            this.$router.push("/book/" +id);
        },
        async remove() {
            if (confirm("삭제하시겠습니까?")) {
                await deleteBook(this.book.id);
                this.goList();
            }
        }
    }
}
</script>

<style scoped>
div#BookList { padding: 30px; width: 500px; margin: auto; border: 1px solid; }
div.header { display: flex; justify-content: space-between; align-items: baseline;}
table { border-collapse: collapse; width: 100%; margin: auto; }
tr:nth-child(1) { background-color: #eee; text-align: center; }
td { border: 1px solid gray; padding: 6px; }
td:nth-child(1) { text-align: center; width: 30px; }
tr:hover { background-color: #ffd; cursor: pointer }
button { width: 100px; height: 30px; margin: 3px; }
</style>