<template>
    <div id="BookCreate">
        <h1>책 {{ book.id > 0 ? "수정" : "등록" }}</h1>
        <hr />
        <div>
            <input type="text" placeholder="제목을 입력하세요" v-model="book.title" />
        </div>
        <div>
            <input type="text" placeholder="저자를 입력하세요" v-model="book.author" />
        </div>
        <div>
            <input type="text" placeholder="가격을 입력하세요" v-model="book.price" />
        </div>
        <div>
            <button type="button" @click="save">저장</button>
            <button type="button" @click="goList">취소</button>
        </div>
    </div>
</template>

<script>
import { loadBook, insertBook, updateBook }
    from '../bookService';

export default {
    name: "BookCreate",
    date() {
      return {
        book: { }
      }  
    },
    async mounted() {
        const id = this.$route.params.id;
        if (id > 0)
            this.book = await loadBook(id);
        else
            this.book = {id:0, title: '', author: '', price:0 };
    },
    methods: {
        async save() {
            if (this.book.id > 0)
                await updateBook(this.book);
            else
                await insertBook(this.book);
            this.goList();
        },
        goList() {
            this.$router.push("/");
        }
    }
}
</script>