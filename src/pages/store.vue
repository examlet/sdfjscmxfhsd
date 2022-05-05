<script setup lang="ts">
const store = useStore();
const router = useRouter()

if (!store.productPrice) {
    router.push('/')
}

const toWA = (text: string) => {
    let tt = `Oi, eu quero saber sobre o "${store.productName}" no valor de ${store.productPrice} pagamento por ${text}`
    window.open(`https://api.whatsapp.com/send/?phone=5511954171454&text=${tt}&app_absent=0`, '_top')
}
const price12 = (parseFloat(store.productPrice) * 12 * 0.9).toFixed(2)

</script>

<template>
    <div h-full w-full>
        <header w-full h-64px>
            <div h-64px border="b-2px [#ED4343]" fw-800 items-center text="center 26px [#ED4343]" leading-64px>
                PĀRTA
            </div>
        </header>
        <main>
            <div h-100px px-16px py-20px border="b-2px [#dbdfe3]">
                <h1 text="20px" fw-700>Pagamento</h1>
                Próximo: Endereço
            </div>

            <div m-20px p-30px rounded-lg style="box-shadow: 0 8px 16px 0 rgb(0 0 0 / 24%);">
                <div border="1px [#e5e8eb]" rounded-lg w-full h-77px grid grid-cols="[1fr_4fr]" mb-20px @click="toWA('Cartão de Crédito')">
                    <div pl-15px pt-24px>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM19 18H5C4.45 18 4 17.55 4 17V12H20V17C20 17.55 19.55 18 19 18ZM20 8H4V6H20V8Z" fill="currentColor"></path></svg>
                    </div>
                    <div h-full items-center py-15px><h3>Cartão de Crédito</h3><span text="12px [#637381]">Em até 12x de R$ {{store.productPrice}}</span></div>
                </div>

                <div border="1px [#e5e8eb]" rounded-lg w-full h-77px grid grid-cols="[1fr_4fr]" mb-20px @click="toWA('Boleto')">
                    <div pl-15px pt-24px>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 5H5V19H2V5ZM7 5H9V19H7V5ZM20 5H22V19H20V5ZM14 5H18V19H14V5ZM10 5H12V19H10V5Z" fill="currentColor"></path></svg>
                    </div>
                    <div h-full items-center py-15px><h3>Boleto</h3><span text="12px [#637381]">R$ {{ price12 }} (10% off)</span></div>
                </div>

                <div border="1px [#e5e8eb]" rounded-lg w-full h-280px grid grid-cols="[1fr_4fr]" mb-20px @click="toWA('Pix')">
                    <div pl-15px pt-24px>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5975 17.2986C16.8129 17.2986 16.0744 16.9946 15.5195 16.4397L12.52 13.4403C12.3096 13.229 11.9422 13.2298 11.7316 13.4403L8.72117 16.4508C8.1662 17.0056 7.42842 17.3104 6.64239 17.3104H6.05264L9.85235 21.1101C11.0374 22.2966 12.9618 22.2966 14.1484 21.1101L17.9593 17.2986H17.5975Z" fill="#32BCAD"></path><path d="M8.72117 7.54931C8.1662 6.99435 7.42842 6.68966 6.64476 6.68966H6.05264L9.85235 2.88994C11.0374 1.70335 12.9618 1.70335 14.1484 2.88994L17.9593 6.70075H17.5975C16.8129 6.70075 16.0744 7.00544 15.5195 7.56039L12.52 10.5597C12.3024 10.7782 11.9486 10.7774 11.7316 10.5597L8.72117 7.54931Z" fill="#32BCAD"></path><path d="M21.1107 9.85123L18.8079 7.54854C18.758 7.56987 18.7018 7.58257 18.644 7.58257H17.5975C17.056 7.58257 16.5256 7.80178 16.1441 8.1834L13.1439 11.1843C12.8637 11.4646 12.4947 11.6054 12.1259 11.6054C11.757 11.6054 11.3889 11.4646 11.1086 11.1843L8.09739 8.17307C7.71424 7.79077 7.18466 7.57148 6.64239 7.57148H5.35683C5.30139 7.57148 5.2507 7.55802 5.20084 7.53898L2.88939 9.85123C1.70354 11.0387 1.70354 12.9614 2.88939 14.148L5.20084 16.4603C5.24993 16.4413 5.30139 16.4286 5.35683 16.4286H6.64239C7.18466 16.4286 7.71424 16.2086 8.09739 15.827L11.1079 12.8158C11.6525 12.2727 12.6 12.2727 13.1439 12.8158L16.1441 15.8159C16.5256 16.1991 17.056 16.4175 17.5975 16.4175H18.644C18.7018 16.4175 18.758 16.4302 18.8079 16.4508L21.1107 14.148C22.2964 12.9614 22.2964 11.0387 21.1107 9.85123Z" fill="#32BCAD"></path></svg>
                    </div>
                    <div h-full items-center py-15px>
                        <h3>Pix</h3>
                        <span text="12px [#637381]">R$ {{ price12 }} (10% off)</span>
                        <img src="/img/pix.png" alt="pix" width="200" height="200">
                    </div>
                    
                </div>

                <div text="15px center" fw-600 @click="toWA('cupom de desconto')">Inserir cupom de desconto</div>
            </div>

            <div mt-20px text="14px [#637381] center" px-30px>Caso fique insatisfeito, você tem 7 dias para solicitar seu dinheiro de volta.</div>
        </main>
        <footer></footer>
    </div>
</template>

<style scoped>
</style>