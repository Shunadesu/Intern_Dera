
const usercomment = localStorage.getItem('comment');
const userreview = localStorage.getItem('review');

console.log(usercomment)

const VotingData = [

    {
        id:1,
        name: ' David Johnson',
        comment: 'I\'ve been searching for the perfect outdoor lounge chair for months, and the Lollygagger Recycled Lounge Chair ticks all the boxes. Its ergonomic design makes it incredibly comfortable, even for extended periods, and the recycled plastic construction gives me peace of mind knowing I\'m making an eco-friendly choice. The chair is also surprisingly lightweight and easy to move around, allowing me to create different seating arrangements with ease. I couldn\'t be happier with my purchase!'
        ,day: '27/10/2023', 
    },

    {
        id:2,
        name: 'Samantha Brown',
        comment: 'As someone who spends a lot of time outdoors, finding durable and comfortable furniture is essential. The Lollygagger Lounge Chair not only meets but exceeds my expectations. Its sturdy construction withstands the elements with ease, and the contoured seat provides excellent support for lounging. I also love the minimalist design, which complements my outdoor space perfectly. Plus, knowing that it\'s made from recycled materials makes me feel good about my purchase. I highly recommend this chair to anyone looking for quality outdoor furniture'
        ,day: '27/10/2023', 
    },

    {
        id:3,
        name: 'Michael Anderson',
        comment: 
        'I recently purchased the Lollygagger Recycled Lounge Chair for my backyard, and I couldn\'t be happier with it. Not only is it incredibly comfortable, but it also looks fantastic. The sleek, modern design adds a touch of elegance to my outdoor space, and the vibrant color options allowed me to choose the perfect shade to match my decor. Plus, knowing that it\'s made from recycled materials gives me peace of mind. Overall, a great investment that I know will last for years to come.'
        ,day: '27/10/2023', 
    },

    {
        id:4,
        name: 'Sarah Wilson',
        comment: 'I\'ve been searching for the perfect outdoor lounge chair for months, and the Lollygagger Recycled Lounge Chair ticks all the boxes. Its ergonomic design makes it incredibly comfortable, even for extended periods, and the recycled plastic construction gives me peace of mind knowing I\'m making an eco-friendly choice. The chair is also surprisingly lightweight and easy to move around, allowing me to create different seating arrangements with ease. I couldn\'t be happier with my purchase!'
        ,day: '27/10/2023', 
    },

    {
        id:5,
        name: 'Emily Smith',
        comment: 
        'The Lollygagger Recycled Lounge Chair exceeded my expectations in every way. Not only does it provide exceptional comfort for hours of outdoor lounging, but its sustainable construction aligns perfectly with my eco-conscious values. The sleek design adds a modern touch to my patio, and I appreciate the variety of color options available to match my decor. Overall, a fantastic product that I highly recommend to anyone seeking quality, comfort, and sustainability in their outdoor furniture.'
        ,day: '27/10/2023', 
    },
    {
        id: usercomment ? 6 : null,
        name:  usercomment ? `${usercomment}` : null,
        comment: usercomment ? userreview : null,
        day: usercomment ? '27/10/2023' : null,
    },
]

export default VotingData