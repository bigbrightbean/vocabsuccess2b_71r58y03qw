// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The old mansion was __________, with its crumbling walls and eerie atmosphere scaring away visitors.",
        chinese_question: "这座老宅子非常__________，其破旧的墙壁和诡异的气氛吓跑了来访者。",
        answers: [
            { option: "A", answer: "beautiful", chinese_answer: "美丽的", chinese_romanization: "měilì de" },
            { option: "B", answer: "charming", chinese_answer: "迷人的", chinese_romanization: "mírén de" },
            { option: "C", answer: "hideous", chinese_answer: "丑陋的", chinese_romanization: "chǒulòu de" },
            { option: "D", answer: "attractive", chinese_answer: "吸引人的", chinese_romanization: "xīyǐn rén de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'hideous' means extremely ugly or unpleasant." +
            "<br><br>" +
            "(A) 'beautiful' means pleasing the senses or mind aesthetically." +
            "<br><br>" +
            "(B) 'charming' means very pleasant or attractive." +
            "<br><br>" +
            "(D) 'attractive' means pleasing or appealing to the senses.",
        chinese_explanation: "(C) '丑陋的'一词意味着极其丑陋或令人不悦的。" +
            "<br><br>" +
            "(A) '美丽的' 意味着美学上愉悦感官或心灵的。" +
            "<br><br>" +
            "(B) '迷人的' 意味着非常愉快或有吸引力的。" +
            "<br><br>" +
            "(D) '吸引人的' 意味着愉悦或吸引感官的。"
    },
    {
        id: 2,
        question: "The ceremony was __________, with everyone dressed in black and speaking in hushed tones, reflecting the gravity of the occasion.",
        chinese_question: "仪式非常 __________，每个人都穿着黑衣，低声说话，反映了场合的严肃性。",
        answers: [
            { option: "A", answer: "solemn", chinese_answer: "庄严的", chinese_romanization: "zhuāngyán de" },
            { option: "B", answer: "cheerful", chinese_answer: "快乐的", chinese_romanization: "kuàilè de" },
            { option: "C", answer: "casual", chinese_answer: "随意的", chinese_romanization: "suíyì de" },
            { option: "D", answer: "jovial", chinese_answer: "友好的", chinese_romanization: "yǒuhǎo de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'solemn' means formal and dignified; serious." +
            "<br><br>" +
            "(B) 'cheerful' means noticeably happy and optimistic." +
            "<br><br>" +
            "(C) 'casual' means relaxed and unconcerned." +
            "<br><br>" +
            "(D) 'jovial' means cheerful and friendly.",
        chinese_explanation: "(A) '庄严的' 意味着正式和庄重的；严肃的。" +
            "<br><br>" +
            "(B) '快乐的' 意味着明显地快乐和乐观的。" +
            "<br><br>" +
            "(C) '随意的' 意味着放松和不关心的。" +
            "<br><br>" +
            "(D) '友好的' 意味着快乐和友好的。"
    },
    {
        id: 3,
        question: "The __________ design of the car made it very popular among young buyers.",
        chinese_question: "汽车的__________设计使其在年轻买家中非常受欢迎。",
        answers: [
            { option: "A", answer: "clunky", chinese_answer: "笨重", chinese_romanization: "bènzhòng" },
            { option: "B", answer: "sleek", chinese_answer: "光滑", chinese_romanization: "guānghuá" },
            { option: "C", answer: "rough", chinese_answer: "粗糙", chinese_romanization: "cūcāo" },
            { option: "D", answer: "outdated", chinese_answer: "过时", chinese_romanization: "guòshí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sleek' means smooth and glossy." +
            "<br><br>" +
            "(A) 'clunky' means solid, heavy, and old-fashioned." +
            "<br><br>" +
            "(C) 'rough' means having an uneven or irregular surface." +
            "<br><br>" +
            "(D) 'outdated' means no longer in use or fashionable.",
        chinese_explanation: "(B) '光滑'一词意味着光滑且有光泽。" +
            "<br><br>" +
            "(A) '笨重' 意味着坚固、沉重且老式。" +
            "<br><br>" +
            "(C) '粗糙' 意味着表面不平或不规则。" +
            "<br><br>" +
            "(D) '过时' 意味着不再使用或不再时尚。"
    },
    {
        id: 4,
        question: "Her __________ voice was perfect for the role in the musical.",
        chinese_question: "她的__________嗓音非常适合音乐剧中的角色。",
        answers: [
            { option: "A", answer: "flat", chinese_answer: "平淡的", chinese_romanization: "píngdàn de" },
            { option: "B", answer: "tuneful", chinese_answer: "悦耳的", chinese_romanization: "yuè'ěr de" },
            { option: "C", answer: "monotonous", chinese_answer: "单调的", chinese_romanization: "dāndiào de" },
            { option: "D", answer: "off-key", chinese_answer: "走调的", chinese_romanization: "zǒu diào de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'tuneful' means having a pleasing tune; melodious." +
            "<br><br>" +
            "(A) 'flat' means lacking emotion, interest, or excitement." +
            "<br><br>" +
            "(C) 'monotonous' means dull, tedious, and repetitious; lacking in variety and interest." +
            "<br><br>" +
            "(D) 'off-key' means not in accordance with the correct pitch or tone.",
        chinese_explanation: "(B) '悦耳的' 意味着有一个悦耳的曲调；旋律优美的。" +
            "<br><br>" +
            "(A) '平淡的' 意味着缺乏情感、兴趣或兴奋的。" +
            "<br><br>" +
            "(C) '单调的' 意味着枯燥乏味的；缺乏多样性和兴趣的。" +
            "<br><br>" +
            "(D) '走调的' 意味着不符合正确的音调或音色的。"
    },
    {
        id: 5,
        question: "Her __________ dress drew stares at the formal event, as it was brightly colored and excessively adorned with sequins.",
        chinese_question: "她那件 __________ 的连衣裙在正式活动中引来注目，因为它颜色鲜艳，镶满了亮片。",
        answers: [
            { option: "A", answer: "understated", chinese_answer: "低调的", chinese_romanization: "dīdiào de" },
            { option: "B", answer: "garish", chinese_answer: "俗丽的", chinese_romanization: "súlì de" },
            { option: "C", answer: "elegant", chinese_answer: "优雅的", chinese_romanization: "yōuyǎ de" },
            { option: "D", answer: "modest", chinese_answer: "谦逊的", chinese_romanization: "qiānxùn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'garish' means obtrusively bright and showy; lurid." +
            "<br><br>" +
            "(A) 'understated' means presented or expressed in a subtle and effective way." +
            "<br><br>" +
            "(C) 'elegant' means pleasingly graceful and stylish in appearance or manner." +
            "<br><br>" +
            "(D) 'modest' means unassuming in the estimation of one's abilities or achievements.",
        chinese_explanation: "(B) '俗丽的' 意味着刺眼的，显眼而俗气的。" +
            "<br><br>" +
            "(A) '低调的' 意味着以微妙和有效的方式呈现或表达的。" +
            "<br><br>" +
            "(C) '优雅的' 意味着在外观或举止上令人愉悦地优雅和时尚的。" +
            "<br><br>" +
            "(D) '谦逊的' 意味着对自己能力或成就的估计不高。"
    },
    {
        id: 6,
        question: "Despite numerous attempts to convince him otherwise, he remained __________ in his decision, refusing to change his mind.",
        chinese_question: "尽管多次试图说服他改变主意，他在决定上依然 __________，拒绝改变主意。",
        answers: [
            { option: "A", answer: "stubborn", chinese_answer: "固执的", chinese_romanization: "gùzhí de" },
            { option: "B", answer: "flexible", chinese_answer: "灵活的", chinese_romanization: "línghuó de" },
            { option: "C", answer: "agreeable", chinese_answer: "同意的", chinese_romanization: "tóngyì de" },
            { option: "D", answer: "compliant", chinese_answer: "顺从的", chinese_romanization: "shùncóng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'stubborn' means having or showing dogged determination not to change one's attitude or position on something." +
            "<br><br>" +
            "(B) 'flexible' means capable of bending easily without breaking; willing to change or compromise." +
            "<br><br>" +
            "(C) 'agreeable' means willing to agree to something." +
            "<br><br>" +
            "(D) 'compliant' means inclined to agree with others or obey rules, especially to an excessive degree.",
        chinese_explanation: "(A) '固执的' 意味着顽强地决定不改变自己的态度或立场。" +
            "<br><br>" +
            "(B) '灵活的' 意味着能够轻松弯曲而不破裂；愿意改变或妥协的。" +
            "<br><br>" +
            "(C) '同意的' 意味着愿意同意某事的。" +
            "<br><br>" +
            "(D) '顺从的' 意味着倾向于同意他人或遵守规则，尤其是过度地。"
    },
    {
        id: 7,
        question: "His __________ admiration for his mentor was evident to everyone in the office.",
        chinese_question: "他对导师的 __________ 钦佩之情在办公室里每个人都能看得出来。",
        answers: [
            { option: "A", answer: "covert", chinese_answer: "秘密的", chinese_romanization: "mìmì de" },
            { option: "B", answer: "concealed", chinese_answer: "隐藏的", chinese_romanization: "yǐncáng de" },
            { option: "C", answer: "overt", chinese_answer: "公开的", chinese_romanization: "gōngkāi de" },
            { option: "D", answer: "subtle", chinese_answer: "微妙的", chinese_romanization: "wēimiào de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'overt' means done or shown openly; plainly or readily apparent, not secret or hidden." +
            "<br><br>" +
            "(A) 'covert' means not openly acknowledged or displayed." +
            "<br><br>" +
            "(B) 'concealed' means kept secret or hidden." +
            "<br><br>" +
            "(D) 'subtle' means so delicate or precise as to be difficult to analyze or describe.",
        chinese_explanation: "(C) '公开的' 意味着公开或明显地进行或显示的；不是秘密或隐藏的。" +
            "<br><br>" +
            "(A) '秘密的' 意味着不公开承认或展示的。" +
            "<br><br>" +
            "(B) '隐藏的' 意味着保密或隐藏的。" +
            "<br><br>" +
            "(D) '微妙的' 意味着如此精细或精确以至于难以分析或描述的。"
    },
    {
        id: 8,
    question: "The team's __________ mood after the loss was palpable, making the locker room silent.",
    chinese_question: "球队在失利后的 __________ 情绪是显而易见的，使更衣室一片寂静。",
    answers: [
        { option: "A", answer: "jubilant", chinese_answer: "欢腾", chinese_romanization: "huānténg" },
        { option: "B", answer: "glum", chinese_answer: "忧郁", chinese_romanization: "yōuyù" },
        { option: "C", answer: "elated", chinese_answer: "兴高采烈", chinese_romanization: "xìnggāo cǎiliè" },
        { option: "D", answer: "ecstatic", chinese_answer: "狂喜", chinese_romanization: "kuángxǐ" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'glum' means looking or feeling dejected; morose." +
        "<br><br>" +
        "(A) 'jubilant' means feeling or expressing great happiness and triumph." +
        "<br><br>" +
        "(C) 'elated' means ecstatically happy." +
        "<br><br>" +
        "(D) 'ecstatic' means feeling or expressing overwhelming happiness or joyful excitement.",
    chinese_explanation: "(B) '忧郁' 意味着看起来或感到沮丧；阴郁的。" +
        "<br><br>" +
        "(A) '欢腾' 意味着感到或表达极大的快乐和胜利。" +
        "<br><br>" +
        "(C) '兴高采烈' 意味着欣喜若狂。" +
        "<br><br>" +
        "(D) '狂喜' 意味着感到或表达极度的快乐或喜悦。"
    },
    {
        id: 9,
        question: "The __________ competition between the companies drove them to innovate and improve their products constantly.",
        chinese_question: "公司之间的 __________ 竞争促使他们不断创新和改进产品。",
        answers: [
            { option: "A", answer: "lenient", chinese_answer: "宽松的", chinese_romanization: "kuānsōng de" },
            { option: "B", answer: "ruthless", chinese_answer: "无情的", chinese_romanization: "wúqíng de" },
            { option: "C", answer: "mild", chinese_answer: "温和的", chinese_romanization: "wēnhé de" },
            { option: "D", answer: "forgiving", chinese_answer: "宽恕的", chinese_romanization: "kuānshù de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'ruthless' means having or showing no pity or compassion for others." +
            "<br><br>" +
            "(A) 'lenient' means (of punishment or a person in authority) permissive, merciful, or tolerant." +
            "<br><br>" +
            "(C) 'mild' means not severe, serious, or harsh." +
            "<br><br>" +
            "(D) 'forgiving' means ready and willing to forgive.",
        chinese_explanation: "(B) '无情的' 意味着对他人没有怜悯或同情心的。" +
            "<br><br>" +
            "(A) '宽松的' 意味着（指惩罚或权威人物）宽容的、仁慈的或容忍的。" +
            "<br><br>" +
            "(C) '温和的' 意味着不严厉、严重或苛刻的。" +
            "<br><br>" +
            "(D) '宽恕的' 意味着准备好且愿意宽恕的。"
    },
    {
        id: 10,
    chinese_question: "他的__________能力帮助他理解不同方言的细微差别。",
    answers: [
        { option: "A", answer: "mathematical", chinese_answer: "数学的", chinese_romanization: "shùxué de" },
        { option: "B", answer: "linguistic", chinese_answer: "语言的", chinese_romanization: "yǔyán de" },
        { option: "C", answer: "scientific", chinese_answer: "科学的", chinese_romanization: "kēxué de" },
        { option: "D", answer: "artistic", chinese_answer: "艺术的", chinese_romanization: "yìshù de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'linguistic' means relating to language or linguistics. Figuratively, it can mean having a talent for understanding and using language effectively." +
        "<br><br>" +
        "(A) 'mathematical' means relating to mathematics." +
        "<br><br>" +
        "(C) 'scientific' means based on or characterized by the methods and principles of science." +
        "<br><br>" +
        "(D) 'artistic' means having or revealing natural creative skill.",
    chinese_explanation: "(B) '语言的'一词意味着与语言或语言学有关。比喻地，它可以表示具有理解和有效使用语言的天赋。" +
        "<br><br>" +
        "(A) '数学的' 意味着与数学有关。" +
        "<br><br>" +
        "(C) '科学的' 意味着基于或以科学的方法和原则为特征。" +
        "<br><br>" +
        "(D) '艺术的' 意味着具有或揭示自然创造技能。"
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
