// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The audience’s enthusiastic __________ of applause and cheering to the performance delighted the actors.",
    chinese_question: "观众对演出的热烈 __________，如掌声和欢呼，让演员们非常高兴。",
    answers: [
        { option: "A", answer: "response", chinese_answer: "反应", chinese_romanization: "fǎnyìng" },
        { option: "B", answer: "silence", chinese_answer: "沉默", chinese_romanization: "chénmò" },
        { option: "C", answer: "avoidance", chinese_answer: "避免", chinese_romanization: "bìmiǎn" },
        { option: "D", answer: "ignorance", chinese_answer: "无知", chinese_romanization: "wúzhī" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'response' means a reaction to something." +
        "<br><br>" +
        "(B) 'silence' means complete absence of sound." +
        "<br><br>" +
        "(C) 'avoidance' means the action of keeping away from or not doing something." +
        "<br><br>" +
        "(D) 'ignorance' means lack of knowledge or information.",
    chinese_explanation: "(A) '反应' 意味着对某事的反应。" +
        "<br><br>" +
        "(B) '沉默' 意味着完全没有声音。" +
        "<br><br>" +
        "(C) '避免' 意味着远离或不做某事的行为。" +
        "<br><br>" +
        "(D) '无知' 意味着缺乏知识或信息。"
    },
    {
        id: 2,
    question: "The government is exploring all __________ to reduce unemployment, such as job training programs and economic incentives.",
    chinese_question: "政府正在探索减少失业的所有 __________，如职业培训计划和经济激励措施。",
    answers: [
        { option: "A", answer: "avenues", chinese_answer: "途径", chinese_romanization: "tújìng" },
        { option: "B", answer: "constraints", chinese_answer: "限制", chinese_romanization: "xiànzhì" },
        { option: "C", answer: "drawbacks", chinese_answer: "缺点", chinese_romanization: "quēdiǎn" },
        { option: "D", answer: "obstacles", chinese_answer: "障碍", chinese_romanization: "zhàng'ài" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'avenues' figuratively means ways of approaching a problem or making progress toward something." +
        "<br><br>" +
        "(B) 'constraints' means limitations or restrictions." +
        "<br><br>" +
        "(C) 'drawbacks' means disadvantages or problems." +
        "<br><br>" +
        "(D) 'obstacles' means things that block one's way or prevent or hinder progress.",
    chinese_explanation: "(A) '途径' 在此语境下意指解决问题或取得进展的方法。" +
        "<br><br>" +
        "(B) '限制' 意味着限制或限制。" +
        "<br><br>" +
        "(C) '缺点' 意味着不利之处或问题。" +
        "<br><br>" +
        "(D) '障碍' 意味着阻碍某人前进或阻碍进展的事物。"
    },
    {
        id: 3,
    question: "The writer's latest novel was completed on __________ from the publisher, who provided a substantial advance, with the expectation that the book would be finished by a certain deadline.",
    chinese_question: "作家的最新小说是在出版商的 __________ 下完成的，出版商提供了大量的预付款，并期待该书在某个截止日期前完成。",
    answers: [
        { option: "A", answer: "dismissal", chinese_answer: "解雇", chinese_romanization: "jiěgù" },
        { option: "B", answer: "commission", chinese_answer: "委托", chinese_romanization: "wěituō" },
        { option: "C", answer: "resignation", chinese_answer: "辞职", chinese_romanization: "cízhí" },
        { option: "D", answer: "complaint", chinese_answer: "投诉", chinese_romanization: "tóusù" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'commission' means an instruction, command, or duty given to a person or group of people." +
        "<br><br>" +
        "(A) 'dismissal' means the act of ordering or allowing someone to leave." +
        "<br><br>" +
        "(C) 'resignation' means an act of retiring or giving up a position." +
        "<br><br>" +
        "(D) 'complaint' means a statement that a situation is unsatisfactory or unacceptable.",
    chinese_explanation: "(B) '委托'一词意味着给某人或一群人下达的指示、命令或职责。" +
        "<br><br>" +
        "(A) '解雇' 意味着下令或允许某人离开的行为。" +
        "<br><br>" +
        "(C) '辞职' 意味着退休或放弃职位的行为。" +
        "<br><br>" +
        "(D) '投诉' 意味着对某种情况不满意或不可接受的陈述。"
    },
    {
        id: 4,
    question: "The chef was in a __________ about what to prepare for the surprise guests who had dietary restrictions.",
    chinese_question: "厨师对准备什么食物给有饮食限制的意外客人感到 __________。",
    answers: [
        { option: "A", answer: "certainty", chinese_answer: "确定性", chinese_romanization: "quèdìng xìng" },
        { option: "B", answer: "quandary", chinese_answer: "困境", chinese_romanization: "kùnjìng" },
        { option: "C", answer: "solution", chinese_answer: "解决", chinese_romanization: "jiějué" },
        { option: "D", answer: "satisfaction", chinese_answer: "满意", chinese_romanization: "mǎnyì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'quandary' means a state of perplexity or uncertainty over what to do in a difficult situation." +
        "<br><br>" +
        "(A) 'certainty' means the quality of being reliably true." +
        "<br><br>" +
        "(C) 'solution' means a means of solving a problem or dealing with a difficult situation." +
        "<br><br>" +
        "(D) 'satisfaction' means fulfillment of one's wishes, expectations, or needs.",
    chinese_explanation: "(B) '困境'一词意味着在面对困难情况时感到困惑或不确定的状态。" +
        "<br><br>" +
        "(A) '确定性' 意味着可靠真实的质量。" +
        "<br><br>" +
        "(C) '解决' 意味着解决问题或处理困难情况的方法。" +
        "<br><br>" +
        "(D) '满意' 意味着满足一个人的愿望、期望或需要。"
    },
    {
        id: 5,
    question: "By breaking the long-standing tradition, the school set a __________ for more inclusive practices in the future.",
    chinese_question: "通过打破长期以来的传统，学校为未来更具包容性的做法设立了一个 __________。",
    answers: [
        { option: "A", answer: "precedent", chinese_answer: "先例", chinese_romanization: "xiānlì" },
        { option: "B", answer: "anomaly", chinese_answer: "异常", chinese_romanization: "yìcháng" },
        { option: "C", answer: "deviation", chinese_answer: "偏差", chinese_romanization: "piānchā" },
        { option: "D", answer: "outlier", chinese_answer: "异类", chinese_romanization: "yìlèi" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'precedent' means an earlier event or action that is regarded as an example or guide to be considered in subsequent similar circumstances." +
        "<br><br>" +
        "(B) 'anomaly' means something that deviates from what is standard, normal, or expected." +
        "<br><br>" +
        "(C) 'deviation' means the action of departing from an established course or accepted standard." +
        "<br><br>" +
        "(D) 'outlier' means a person or thing situated away or detached from the main body or system.",
    chinese_explanation: "(A) '先例' 一词意味着被认为在随后的类似情况下考虑的示例或指南的早期事件或行动。" +
        "<br><br>" +
        "(B) '异常' 意味着与标准、正常或预期情况不同的事物。" +
        "<br><br>" +
        "(C) '偏差' 意味着偏离既定路线或接受标准的行为。" +
        "<br><br>" +
        "(D) '异类' 意味着位于主体或系统之外或分离的人或事物。"
    },
    {
        id: 6,
        question: "The cream contained an __________ to soothe and soften the skin, providing relief from dryness.",
        chinese_question: "这种面霜含有 __________，可以舒缓和软化皮肤，缓解干燥。",
        answers: [
                { option: "A", answer: "irritant", chinese_answer: "刺激物", chinese_romanization: "cìjī wù" },
                { option: "B", answer: "emollient", chinese_answer: "润肤剂", chinese_romanization: "rùnfū jì" },
                { option: "C", answer: "abrasive", chinese_answer: "磨料", chinese_romanization: "móliào" },
                { option: "D", answer: "astringent", chinese_answer: "收敛剂", chinese_romanization: "shōuliǎn jì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'emollient' means a substance that softens and moisturizes the skin." +
                "<br><br>" +
                "(A) 'irritant' means a substance that causes slight inflammation or other discomfort to the body." +
                "<br><br>" +
                "(C) 'abrasive' means a substance used for grinding, polishing, or cleaning a hard surface." +
                "<br><br>" +
                "(D) 'astringent' means a substance that causes the contraction of body tissues, typically used to reduce bleeding from minor abrasions.",
        chinese_explanation: "(B) '润肤剂'一词意味着一种软化和滋润皮肤的物质。" +
                "<br><br>" +
                "(A) '刺激物' 意味着一种对身体引起轻微炎症或其他不适的物质。" +
                "<br><br>" +
                "(C) '磨料' 意味着一种用于研磨、抛光或清洁硬表面的物质。" +
                "<br><br>" +
                "(D) '收敛剂' 意味着一种引起身体组织收缩的物质，通常用于减少轻微擦伤的出血。"
    },
    {
        id: 7,
    question: "The city’s nightlife was a __________ of lights, music, and energy.",
    chinese_question: "城市的夜生活是一个灯光、音乐和能量的 __________。",
    answers: [
        { option: "A", answer: "chaos", chinese_answer: "混乱", chinese_romanization: "hùnluàn" },
        { option: "B", answer: "kaleidoscope", chinese_answer: "万花筒", chinese_romanization: "wànhuātǒng" },
        { option: "C", answer: "festival", chinese_answer: "节日", chinese_romanization: "jiérì" },
        { option: "D", answer: "labyrinth", chinese_answer: "迷宫", chinese_romanization: "mígōng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'kaleidoscope' means a constantly changing pattern or sequence of elements, often used to describe a vibrant and dynamic atmosphere." +
        "<br><br>" +
        "(A) 'chaos' means complete disorder and confusion." +
        "<br><br>" +
        "(C) 'festival' means a day or period of celebration, typically for religious reasons." +
        "<br><br>" +
        "(D) 'labyrinth' means a complicated irregular network of passages or paths in which it is difficult to find one's way.",
    chinese_explanation: "(B) '万花筒' 一词意味着不断变化的元素或序列的图案，常用来描述充满活力和动感的氛围。" +
        "<br><br>" +
        "(A) '混乱' 意味着完全的混乱和混淆。" +
        "<br><br>" +
        "(C) '节日' 意味着通常因为宗教原因而庆祝的一天或一段时间。" +
        "<br><br>" +
        "(D) '迷宫' 意味着一个复杂的不规则通道或路径网络，使人难以找到出路。"
    },
    {
        id: 8,
    question: "The company's focus on employee satisfaction has led to high __________ rates, with most employees choosing to stay long-term.",
    chinese_question: "公司对员工满意度的关注导致了高 __________ 率，大多数员工选择长期留任。",
    answers: [
        { option: "A", answer: "retention", chinese_answer: "保留", chinese_romanization: "bǎoliú" },
        { option: "B", answer: "turnover", chinese_answer: "流失", chinese_romanization: "liúshī" },
        { option: "C", answer: "dismissal", chinese_answer: "解雇", chinese_romanization: "jiěgù" },
        { option: "D", answer: "recruitment", chinese_answer: "招聘", chinese_romanization: "zhāopìn" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'retention' means the continued possession, use, or control of something." +
                "<br><br>" +
                "(B) 'turnover' means the rate at which employees leave a workforce and are replaced." +
                "<br><br>" +
                "(C) 'dismissal' means the act of ordering or allowing someone to leave." +
                "<br><br>" +
                "(D) 'recruitment' means the action of enlisting new people in the armed forces or workforce.",
    chinese_explanation: "(A) '保留' 意味着继续持有、使用或控制某物。" +
                "<br><br>" +
                "(B) '流失' 意味着员工离开劳动力并被替换的速度。" +
                "<br><br>" +
                "(C) '解雇' 意味着命令或允许某人离开的行为。" +
                "<br><br>" +
                "(D) '招聘' 意味着招募新人的行为。"
    },
    {
        id: 9,
        question: "Her __________ for social justice drove her to organize numerous community events and protests.",
        chinese_question: "她对社会正义的 __________ 驱使她组织了许多社区活动和抗议。",
        answers: [
                { option: "A", answer: "indifference", chinese_answer: "漠不关心", chinese_romanization: "mòbùguānxīn" },
                { option: "B", answer: "fervour", chinese_answer: "热情", chinese_romanization: "rèqíng" },
                { option: "C", answer: "passivity", chinese_answer: "被动", chinese_romanization: "bèidòng" },
                { option: "D", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'fervour' means intense and passionate feeling." +
                "<br><br>" +
                "(A) 'indifference' means lack of interest, concern, or sympathy." +
                "<br><br>" +
                "(C) 'passivity' means acceptance of what happens, without active response or resistance." +
                "<br><br>" +
                "(D) 'hesitation' means the action of pausing before saying or doing something.",
        chinese_explanation: "(B) '热情'一词意味着强烈而热情的感觉。" +
                "<br><br>" +
                "(A) '漠不关心' 意味着缺乏兴趣、关心或同情。" +
                "<br><br>" +
                "(C) '被动' 意味着接受发生的事情，而没有积极的反应或抵抗。" +
                "<br><br>" +
                "(D) '犹豫' 意味着在说或做某事之前的暂停动作。"
    },
    {
        id: 10,
    question: "The economic growth of the country has reached a __________, with no significant increase for several years.",
    chinese_question: "该国的经济增长已经到达了一个 __________，数年来没有显著增长。",
    answers: [
        { option: "A", answer: "peak", chinese_answer: "顶峰", chinese_romanization: "dǐngfēng" },
        { option: "B", answer: "plateau", chinese_answer: "停滞", chinese_romanization: "tíngzhì" },
        { option: "C", answer: "rise", chinese_answer: "上升", chinese_romanization: "shàngshēng" },
        { option: "D", answer: "slump", chinese_answer: "衰退", chinese_romanization: "shuāituì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'plateau' means a state of little or no change following a period of activity or progress." +
        "<br><br>" +
        "(A) 'peak' means the highest point." +
        "<br><br>" +
        "(C) 'rise' means an upward movement." +
        "<br><br>" +
        "(D) 'slump' means a sudden severe or prolonged fall in price, value, or amount.",
    chinese_explanation: "(B) '停滞' 意味着在一段活动或进展之后没有变化的状态。" +
        "<br><br>" +
        "(A) '顶峰' 意味着最高点。" +
        "<br><br>" +
        "(C) '上升' 意味着向上的运动。" +
        "<br><br>" +
        "(D) '衰退' 意味着价格、价值或数量的突然严重或长期的下降。"
    }
];


// Function to restart the quiz
function restartQuiz() {
    // Reload the page to restart the quiz
    location.reload();
}

// Variable to keep track of the current question index
var currentQuestionIndex = 0;

// Variable to keep track of the total score
var totalScore = 0;

// Array to store the selected answers for each question
var selectedAnswers = new Array(questions.length).fill(null);

// Variable to track the state of the Chinese translations checkbox
var chineseTranslationsChecked = false;

// Function to toggle Chinese translations
function toggleChineseTranslations() {
    var toggleChineseCheckbox = document.getElementById('toggleChinese');
    chineseTranslationsChecked = !chineseTranslationsChecked; // Toggle checkbox state
    // Call the displayQuestion() function to update the display based on the checkbox state
    displayQuestion(chineseTranslationsChecked);
}



// Function to toggle question shuffling
function toggleQuestionShuffle() {
    var shuffleCheckbox = document.getElementById('shuffleQuestions');
    var shuffleEnabled = shuffleCheckbox.checked;

    // Check if the current question has been answered
    var currentQuestionAnswered = selectedAnswers[currentQuestionIndex] !== null;

    // If the current question has been answered and shuffling is enabled
    if (currentQuestionAnswered && shuffleEnabled) {
        // Move to the next question automatically
        nextQuestion();
    }

    // Call the shuffleQuestions() function to update the questions based on the checkbox state
    shuffleQuestions(shuffleEnabled);
}


// Function to shuffle the remaining unanswered questions
function shuffleQuestions(shuffleEnabled) {
    // Clear the selected answer for the current question
    selectedAnswers[currentQuestionIndex] = null;

    // Copy the questions array
    var remainingQuestions = questions.slice(currentQuestionIndex);

    // Sort the remaining questions based on their IDs
    remainingQuestions.sort((a, b) => a.id - b.id);

    // If shuffling is enabled, shuffle the remaining questions
    if (shuffleEnabled) {
        // Shuffle the remaining questions array using Fisher-Yates algorithm
        for (var i = remainingQuestions.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = remainingQuestions[i];
            remainingQuestions[i] = remainingQuestions[j];
            remainingQuestions[j] = temp;
        }
    }

    // Update the questions array with the shuffled remaining questions
    questions.splice(currentQuestionIndex, remainingQuestions.length, ...remainingQuestions);

    // Clear the selected MCQ option buttons
    var buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
        btn.classList.remove('option-selected', 'correct', 'wrong');
    });

    // Display the current question after shuffling
    displayQuestion(document.getElementById('toggleChinese').checked);

    // Update the progress bar
    updateProgressBar();
}


// Function to display the current question
function displayQuestion() {
    // Get the current question object
    var currentQuestion = questions[currentQuestionIndex];
    
    // Extract question texts and options
    var questionText = currentQuestion.question;
    var questionTextCN = currentQuestion.chinese_question;
    var options = currentQuestion.answers;

    // Display the question text in English without the question number
    document.getElementById('question').innerHTML = questionText;

    // Display the question text in Chinese if the checkbox is checked or if Chinese translations were manually toggled on
    if (document.getElementById('toggleChinese').checked || chineseTranslationsChecked) {
        document.getElementById('question_cn').innerHTML = questionTextCN;
    } else {
        document.getElementById('question_cn').innerHTML = ""; // Clear Chinese question
    }

    // Display the options as buttons with selected state
    var optionsHTML = "";
    for (var i = 0; i < options.length; i++) {
        var isSelected = selectedAnswers[currentQuestionIndex] === options[i].option;
        var optionClass = "option-btn";
        if (isSelected) {
            optionClass += ' option-selected'; // Add option-selected class if option is selected
            // Add correct or wrong class based on the correctness of the option
            if (options[i].option === currentQuestion.correctAnswer) {
                optionClass += ' correct';
            } else {
                optionClass += ' wrong';
            }
        }
        optionsHTML += '<button class="' + optionClass + '" onclick="selectAnswer(' + i + ')" value="' + options[i].option + '">' + options[i].option + '. ' + options[i].answer;
        
        // Append Chinese translation if the checkbox is checked or if Chinese translations were manually toggled on
        if (document.getElementById('toggleChinese').checked || chineseTranslationsChecked) {
            optionsHTML += ' (' + options[i].chinese_answer + ' ' + options[i].chinese_romanization + ')';
        }
        
        optionsHTML += '</button><br>'; // Modify this line to remove the "-"
    }
    document.getElementById('options').innerHTML = optionsHTML;

    // Update the progress bar
    updateProgressBar();
}




// Function to handle the answer selection
function selectAnswer(optionIndex) {
    // Update the selected answer for the current question
    selectedAnswers[currentQuestionIndex] = questions[currentQuestionIndex].answers[optionIndex].option;

    // Disable all option buttons to prevent further selection
    var buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
        btn.disabled = true;
    });

    // Check if the selected answer is correct
    var isCorrect = selectedAnswers[currentQuestionIndex] === questions[currentQuestionIndex].correctAnswer;

    // Display the result
    checkAnswer(selectedAnswers[currentQuestionIndex], isCorrect);
}


// Function to check the answer and display the result
function checkAnswer(selectedOption, isCorrect) {
    // Extract correct answer and explanation
    var correctAnswer = questions[currentQuestionIndex].correctAnswer;
    var correctAnswerEN = questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).answer;
    var correctAnswerCN = questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_answer;
    var correctAnswerRomanization = questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_romanization; // Add this line to extract the romanization
    var explanation = questions[currentQuestionIndex].explanation;
    var chineseExplanation = questions[currentQuestionIndex].chinese_explanation;

    // Display result and score
    var resultHTML = "";
    if (isCorrect) {
        // Increase the total score
        totalScore++;

        // Play correct sound
        var audio = new Audio('correct.mp3');
        audio.play();

        // Display correct message and explanation
        resultHTML += "<span class='correct-explanation'>Correct</span><br>"; // Added class for correct explanation
    } else {
        // Play incorrect sound
        var audio = new Audio('incorrect.mp3');
        audio.play();

        // Display incorrect message and correct answer
        resultHTML += "<span class='wrong-explanation'>Incorrect</span><br>"; // Added class for wrong explanation
    }

    resultHTML += "The correct answer is: " + correctAnswer + ": " + correctAnswerEN + ", " + correctAnswerCN + " (" + correctAnswerRomanization + ")<br><br>"; // Modify this line to include the romanization
    resultHTML += "Explanation (English):<br>" + explanation + "<br><br>";
    resultHTML += "Explanation (Chinese):<br>" + chineseExplanation + "<br><br>";

    // Display total score
    resultHTML += "Total Score: " + totalScore + "/" + questions.length;
    document.getElementById('result').innerHTML = resultHTML;

    // Apply correct or incorrect styling to the selected MCQ option button
    var selectedOptionButton = document.querySelector('.option-btn[value="' + selectedOption + '"]');
    if (isCorrect) {
        selectedOptionButton.classList.add('correct');
    } else {
        selectedOptionButton.classList.add('wrong');
    }
}



// Function to update the progress bar
function updateProgressBar() {
    // Calculate the progress percentage
    var progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    
    // Update the width of the progress bar
    document.getElementById('progress-bar').style.width = progress + '%';
}


// Function to move to the previous question
function previousQuestion() {
    // Decrease the current question index
    currentQuestionIndex--;

    // Ensure the index does not go below 0
    if (currentQuestionIndex < 0) {
        currentQuestionIndex = 0;
    }

    // Check the state of the checkbox for Chinese translations
    var showChineseTranslations = document.getElementById('toggleChinese').checked;

    // Display the previous question with the appropriate translations
    displayQuestion(showChineseTranslations);

    // Disable all MCQ buttons
    var buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
        btn.disabled = true;
    });

    // Enable the previously selected MCQ button
    var previousSelectedAnswer = selectedAnswers[currentQuestionIndex];
    buttons.forEach(function(btn) {
        if (btn.value === previousSelectedAnswer) {
            btn.disabled = false;
            // Check if the previously selected answer is correct or wrong and apply the appropriate class
            if (previousSelectedAnswer === questions[currentQuestionIndex].correctAnswer) {
                btn.classList.add('correct');
            } else {
                btn.classList.add('wrong');
            }
        }
    });

    // Show the selected answer and its correctness for the previous question
    var correctAnswer = questions[currentQuestionIndex].correctAnswer;

    // Display the explanation for the previous question
    var explanationHTML = "";
    if (previousSelectedAnswer) {
        var answerColorClass = previousSelectedAnswer === correctAnswer ? 'correct' : 'wrong';
        explanationHTML += "<span class='" + answerColorClass + "-explanation'>Your Answer is: " + (previousSelectedAnswer === correctAnswer ? "Correct" : "Incorrect") + "</span><br>";
    }
    explanationHTML += "The correct answer is: " + correctAnswer + " (" + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).answer + ", " + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_answer + ")<br><br>";
    explanationHTML += "Explanation (English):<br>" + questions[currentQuestionIndex].explanation + "<br><br>";
    explanationHTML += "Explanation (Chinese):<br>" + questions[currentQuestionIndex].chinese_explanation + "<br><br>";
    document.getElementById('result').innerHTML = explanationHTML;
}




// Function to end the quiz and display the total score in a popup box
function endQuiz() {
    // Display a popup box with the quiz ended message and total score
    alert("Congratulations! You've reached the end.\n\nYour Total Score: " + totalScore + "/" + questions.length);
}



// Function to move to the next question
// Function to move to the next question
function nextQuestion() {
    // Ensure the "Turn on Chinese translations" checkbox remains unchecked
    chineseTranslationsChecked = false;

    // Check if the player has selected an answer for the current question
    if (selectedAnswers[currentQuestionIndex] === null) {
        // If no answer is selected, display an error message in a popup box
        alert("Please select an answer for Question " + (currentQuestionIndex + 1) + " before moving to the next question.");
        return; // Exit the function to prevent moving to the next question
    }

    // Increase the current question index
    currentQuestionIndex++;

    // Check if all questions have been answered
    if (currentQuestionIndex >= questions.length) {
        // If all questions have been answered, end the quiz
        endQuiz();
        // Reset the current question index to prevent accessing out of bounds
        currentQuestionIndex = questions.length - 1;
    } else {
        // Display the next question with both English and Chinese translations by default
        displayQuestion(chineseTranslationsChecked);

        // Show the selected answer and its correctness for the next question
        var selectedAnswer = selectedAnswers[currentQuestionIndex];
        var correctAnswer = questions[currentQuestionIndex].correctAnswer;

        // Find the button corresponding to the selected answer
        var buttons = document.querySelectorAll('.option-btn');
        buttons.forEach(function(btn) {
            if (btn.value === selectedAnswer) {
                if (selectedAnswer === correctAnswer) {
                    btn.classList.add('correct');
                } else {
                    btn.classList.add('wrong');
                }
            }
        });

        // Display the explanation for the next question
        var explanationHTML = "";
        if (selectedAnswer) {
            var answerColorClass = selectedAnswer === correctAnswer ? 'correct' : 'wrong';
            explanationHTML += "<span class='" + answerColorClass + "-explanation'>Your Answer is: " + (selectedAnswer === correctAnswer ? "Correct" : "Incorrect") + "</span><br>";
            explanationHTML += "The correct answer is: " + correctAnswer + " (" + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).answer + ", " + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_answer + ")<br><br>";
            explanationHTML += "Explanation (English):<br>" + questions[currentQuestionIndex].explanation + "<br><br>";
            explanationHTML += "Explanation (Chinese):<br>" + questions[currentQuestionIndex].chinese_explanation + "<br><br>";
        }
        document.getElementById('result').innerHTML = explanationHTML;
    }
}



function startOver() {
    // Reset the current question index to the first question
    currentQuestionIndex = 0;

    // Reset the total score and selected answers
    totalScore = 0;
    selectedAnswers.fill(null);

    // Uncheck the checkbox for Chinese translations
    document.getElementById('toggleChinese').checked = false;

    // Uncheck the checkbox for shuffling questions
    document.getElementById('shuffleQuestions').checked = false;

    // Reset the order of questions to the default state
    // Sort the questions array based on the 'id' property to revert to the original order
    questions.sort((a, b) => a.id - b.id);

    // Display the first question
    // Display only English translations by passing 'false' to the displayQuestion function
    displayQuestion(false);

    // Clear the result section
    document.getElementById('result').innerHTML = "";

    // Reset font size to default
    increaseFontSize = true; // Set the flag to true for increasing font size
    adjustFontSize(); // Adjust font size of all elements
    adjustChineseFontSize(); // Adjust font size of Chinese elements and explanations
}




// Function to adjust font size of all elements
function adjustFontSize() {
    var container = document.querySelector('.container');
    var elements = container.querySelectorAll('*');
    var scaleFactor = increaseFontSize ? 1.1 : 0.9; // Scale factor for increasing or decreasing font size

    elements.forEach(function(element) {
        var currentFontSize = parseInt(window.getComputedStyle(element).fontSize);
        var newFontSize = currentFontSize * scaleFactor;
        element.style.fontSize = newFontSize + 'px';
    });
}

// Function to adjust font size of Chinese elements and explanations
function adjustChineseFontSize() {
    var container = document.querySelector('.container');
    var chineseElements = container.querySelectorAll('[lang="zh"]');
    var explanations = document.querySelectorAll('.explanation');
    var allElements = [...chineseElements, ...explanations];
    var scaleFactor = increaseFontSize ? 1.1 : 0.9; // Use the same scale factor as other elements

    allElements.forEach(function(element) {
        var currentFontSize = parseInt(window.getComputedStyle(element).fontSize);
        var newFontSize = currentFontSize * scaleFactor;
        element.style.fontSize = newFontSize + 'px';
    });
}

// Display the first question when the page loads with both English and Chinese translations by default
window.onload = function() {
    toggleChineseTranslations();
    adjustFontSize(); // Initialize font size
    adjustChineseFontSize(); // Initialize Chinese font size
};


// + button event listener
document.getElementById('increase-font-size').addEventListener('click', function() {
    increaseFontSize = true;
    adjustFontSize();
    adjustChineseFontSize();
});

// - button event listener
document.getElementById('decrease-font-size').addEventListener('click', function() {
    increaseFontSize = false;
    adjustFontSize();
    adjustChineseFontSize();
});

// Chinese translation checkbox event listener
document.getElementById('toggleChinese').addEventListener('click', function() {
    adjustChineseFontSize();
});

// Shuffle checkbox event listener
document.getElementById('shuffleQuestions').addEventListener('click', function() {
    adjustFontSize();
    adjustChineseFontSize();
});


function goToHomePage() {
    // Redirect to the main index page
    window.location.href = "../index.html";
}
