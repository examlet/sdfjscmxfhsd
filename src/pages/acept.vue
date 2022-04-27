<script setup lang="ts">
const name = ref('')
const mail = ref('')
const wapp = ref('')

const store = useStore()
const router = useRouter()
const toStore = () => {
    if (name.value && mail.value && wapp.value) {
        useFetch(`/api/gs?name=${name.value}&mail=${mail.value}&number=${wapp.value}&product=${store.productName}&price=${store.productPrice}`)
        store.setCustomer(name.value, mail.value, wapp.value);
        router.push('/store')
    }
}

if (!store.productPrice) {
    router.push('/')
}
</script>

<template>
    <div h-full w-full>
        <header w-full h-64px>
            <div h-64px border="b-2px [#ED4343]" fw-800 items-center text="center 26px [#ED4343]" leading-64px>
                PĀRTA
            </div>
        </header>
        <main>
            <div h-150px px-16px py-20px border="b-2px [#dbdfe3]">
                <h1 text="20px" fw-700>Crie uma conta</h1>
                Ao criar sua conta, você estará concordando com os termos de uso e as políticas de privacidade
            </div>

            <div m-20px p-30px rounded-lg style="box-shadow: 0 8px 16px 0 rgb(0 0 0 / 24%);" p-20px>
                <input p-10px rounded-lg h-40px mt-20px border="b-1px [#ED4343]" w-full v-model="name" placeholder="Nome completo">
                <input p-10px rounded-lg h-40px mt-20px border="b-1px [#ED4343]" w-full v-model="mail" placeholder="E-mail">
                <input p-10px rounded-lg h-40px mt-20px border="b-1px [#ED4343]" w-full v-model="wapp" placeholder="Whatsapp">
                <input p-10px rounded-lg h-40px mt-20px border="b-1px [#ED4343]" w-full type="" name="" value="" placeholder="Senha">
            
                <button @click="toStore" h-42px mt-30px w-260px bg="[#ED4343]" text="26px [#ffffff]" fw-600 rounded mx-auto my-70px>Criar conta</button>
            </div> 
        </main>
        <footer></footer>
    </div>
</template>

<style scoped>
</style>