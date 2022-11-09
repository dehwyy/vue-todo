<template >
	<div class="post-form">
		<div class="input__wrapper">
			<input 
				v-model="titleInputValue"
				placeholder="Добавить название"/>
		</div>
		<div class="input__wrapper">
			<input 
				v-model="bodyInputValue"
				placeholder="Добавить описание"/>
		</div>
		<div class="btns__wrapper">
			<div>
				<button 
					@click="createPost"
					class="btn btn-primary"
					>Добавить пост	
				</button>
			</div>
			<div class='sort-wrapper'>
				<button
					class="btn btn-primary btn-sort"
					@click.stop="toggleSelect"
					>Выбрать сортировку:
				</button>
				<div class="sort-types" :class="{displayNone: !isModal}">
					<div :class="['sort-types__item', {
						'selected__item': sortType === selectedType
					}]" 
						v-for="sortType in sortTypes"
						@click="() => setSortType(sortType)"	
					>
						{{sortType}}
					</div>
				</div>
			</div>
			
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			titleInputValue: "",
			bodyInputValue: "",
			selectedType: ""
		}
	},
	methods: {
		createPost() {
			
			this.$emit("createPost", {
				id: Date.now() + " <- dateNow bruh",
				title: this.titleInputValue,
				body: this.bodyInputValue
			})
			this.titleInputValue = ''
			this.bodyInputValue = ''	
		},
		toggleSelect() {
			this.$emit("update:isModal", !this.isModal)
		},
		setSortType(sortT) {
			this.$emit("setSort", sortT)
			this.toggleSelect()
			this.selectedType = sortT
		}
	},
	props: {
		sortTypes: {
			required: true,
			type: Array
		},
    isModal: {
			type: Boolean,
			default: false
		},
		posts: {
			type: Array,
			required: true
		}
	},
}
</script>
<style>
.post-form {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
}
.input__wrapper {
	justify-self: flex-start;
	width: 500px;
}
.input__wrapper:nth-child(2) {
	margin: 20px 0 30px 0;
}
.btns__wrapper {
	display: flex;
	width: 500px;
	justify-content: space-between;
}
.btn-sort {
	border-bottom-left-radius: none!important;

}
.sort-wrapper {
	position: relative;
	background-color: red;
	border-radius: 7px;
}
.sort-types {
	position: absolute;
	background-color: #0d6efd;
	width: 100%;
	margin: 3px 0 0 0;
	border-radius: 5px;
	z-index: 3;
}
.sort-types__item {
	padding: 7px 0 7px 30px;
	user-select: none;
	color: white;
}
.sort-types__item:hover {
	background-color: #0b5ed7;
}
.sort-types__item:hover:first-child {
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
}
.sort-types__item:hover:last-child {
	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;
}
.selected__item {
	background-color: #6f42c1;
}
.selected__item:hover {
	background-color: #663eb0;
}
</style>