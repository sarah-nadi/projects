$(".open").on("click",function(){
    $(".side-content").animate({width:"85%"} , 800)
    $(".close").css("display","block");
    $(".open").css("display","none");
    $(".side-content ul li").addClass("block")
       





})
$(".close").on("click",function(){
    $(".side-content").animate({width: "0%"} , 700);
    $(".open").css("display","block");
    $(".close").css("display","none");
    $(".side-content ul li").removeClass("block")



})
$(".faq-button").on("click",function(){
   
    
    $(".chat-container").css("opacity" , "1");



})


$(document).on("click", ".home", function(){
    window.location.href = "index.html";
});
$(document).on("click", ".contact", function(){
    window.location.href = "contact.html";
});
$(document).on("click", ".chat", function(){
    window.location.href = "chatGPT.html";
});


$(".toggle-section .singer-one").on("click",function(){
    $(".toggle-section .one").slideToggle(500);
    $(".toggle-section .two").slideUp(500);
    $(".toggle-section .three").slideUp(500);
    $(".toggle-section .four").slideUp(500)

})


$(".toggle-section .singer-two").on("click",function(){
    $(".toggle-section .two").slideToggle(500);
    $(".toggle-section .one").slideUp(500);
    $(".toggle-section .three").slideUp(500);
    $(".toggle-section .four").slideUp(500)



})
$(".toggle-section .singer-three").on("click",function(){
    $(".toggle-section .three").slideToggle({width:"100%"} , 500);
    $(".toggle-section .two").slideUp(500);
    $(".toggle-section .one").slideUp(500);
    $(".toggle-section .four").slideUp(500)



})
$(".toggle-section .singer-four").on("click",function(){
    $(".toggle-section .four").slideToggle(500);
    $(".toggle-section .three").slideUp(500);
    $(".toggle-section .two").slideUp(500);
    $(".toggle-section .one").slideUp(500);



})

$("#remaining").on("input" , function(){
    var remaining = 100 - $(this).val().length;
    $(".char").text(remaining);
    if(remaining===0){
        $(".char").text("your available character finished 🙆‍♀️") && $(".end").addClass('d-none') && $(".char").addClass('text-danger');
        

    }
})


var theDate = new Date("2025-1-25");

    setInterval(function() {
        var now = new Date();
        var distance = theDate - now;

        var days = distance / (1000 * 60 * 60 * 24);
        var hours = (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60);
        var minutes = (distance % (1000 * 60 * 60)) / (1000 * 60);
        var seconds = (distance % (1000 * 60)) / 1000;

        $('.days').text(days.toFixed(0) + " d");
        $('.hours').text(hours.toFixed(0) + " h");
        $('.mins').text(minutes.toFixed(0) + " m");
        $('.seconds').text(seconds.toFixed(0) + " s");

       
    }); 



    const apiKey = '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'; 

    async function sendMessage() {
        const userInput = document.getElementById('user-input');
        const chatBox = document.getElementById('chat-box');
    
        if (userInput.value.trim() === '') return;
    
        const userMessage = document.createElement('div');
        userMessage.className = 'chat-message user';
        userMessage.textContent = userInput.value;
        chatBox.appendChild(userMessage);
    
        const userMessageText = userInput.value;
        userInput.value = '';
        chatBox.scrollTop = chatBox.scrollHeight;
    
        const botMessage = document.createElement('div');
        botMessage.className = 'chat-message bot';
        botMessage.textContent = 'جاري المعالجة...';
        chatBox.appendChild(botMessage);
        chatBox.scrollTop = chatBox.scrollHeight;
    
        try {
            await new Promise(resolve => setTimeout(resolve, 2000)); 
    
            const response = await fetch('http://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':` Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    model: 'text-davinci-003',
                    prompt: userMessageText,
                    max_tokens:100
                })
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
            botMessage.textContent = data.choices[0]?.message?.content || 'حدث خطأ أثناء استلام الرد.';
        } catch (error) {
            botMessage.textContent = 'خطأ: لم أستطع الاتصال بالخادم.';
            console.error('Error:', error);
        }
    
        chatBox.scrollTop = chatBox.scrollHeight;
    }