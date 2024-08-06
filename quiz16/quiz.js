// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her __________ nature was evident when she sought revenge against her former colleague for a minor disagreement.",
        chinese_question: "她的 __________ 性格在她因一场小争执而报复前同事时显露无遗。",
        answers: [
            { option: "A", answer: "forgiving", chinese_answer: "宽恕的", chinese_romanization: "kuānshù de" },
            { option: "B", answer: "kind", chinese_answer: "善良的", chinese_romanization: "shànliáng de" },
            { option: "C", answer: "vindictive", chinese_answer: "报复的", chinese_romanization: "bàofù de" },
            { option: "D", answer: "generous", chinese_answer: "慷慨的", chinese_romanization: "kāngkǎi de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'vindictive' means having or showing a strong or unreasoning desire for revenge." +
            "<br><br>" +
            "(A) 'forgiving' means ready and willing to forgive." +
            "<br><br>" +
            "(B) 'kind' means having or showing a friendly, generous, and considerate nature." +
            "<br><br>" +
            "(D) 'generous' means showing a readiness to give more of something than is strictly necessary or expected.",
        chinese_explanation: "(C) '报复的' 意味着有或表现出强烈或不理智的复仇欲望。" +
            "<br><br>" +
            "(A) '宽恕的' 意味着准备和愿意原谅。" +
            "<br><br>" +
            "(B) '善良的' 意味着有或表现出友好、慷慨和体贴的性质。" +
            "<br><br>" +
            "(D) '慷慨的' 意味着愿意给予超过严格必要或预期的东西。"
    },
    {
        id: 2,
    question: "Her __________ belief in social justice drove her to volunteer for numerous community organizations.",
    chinese_question: "她对社会正义的 __________ 信念驱使她为许多社区组织做志愿者。",
    answers: [
        { option: "A", answer: "dispassionate", chinese_answer: "冷静的", chinese_romanization: "lěngjìng de" },
        { option: "B", answer: "mild", chinese_answer: "温和的", chinese_romanization: "wēnhé de" },
        { option: "C", answer: "passionate", chinese_answer: "充满激情的", chinese_romanization: "chōngmǎn jīqíng de" },
        { option: "D", answer: "unconcerned", chinese_answer: "漠不关心的", chinese_romanization: "mòbùguānxīn de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'passionate' means showing or caused by strong feelings or a strong belief." +
        "<br><br>" +
        "(A) 'dispassionate' means not influenced by strong emotion, and so able to be rational and impartial." +
        "<br><br>" +
        "(B) 'mild' means gentle and not easily provoked." +
        "<br><br>" +
        "(D) 'unconcerned' means showing a lack of worry or interest.",
    chinese_explanation: "(C) '充满激情的' 意味着表现出或引起强烈的感情或信念的。" +
        "<br><br>" +
        "(A) '冷静的' 意味着不受强烈情感影响的，因此能够理性和公正的。" +
        "<br><br>" +
        "(B) '温和的' 意味着温柔的，不容易被激怒的。" +
        "<br><br>" +
        "(D) '漠不关心的' 意味着表现出缺乏担忧或兴趣的。"
    },
    {
        id: 3,
    question: "The company faced __________ fines for violating environmental regulations, which significantly impacted their financial stability.",
    chinese_question: "公司因违反环境法规而面临 __________ 的罚款，这严重影响了他们的财务稳定。",
    answers: [
        { option: "A", answer: "punitive", chinese_answer: "惩罚性的", chinese_romanization: "chéngfá xìng de" },
        { option: "B", answer: "lenient", chinese_answer: "宽容的", chinese_romanization: "kuānróng de" },
        { option: "C", answer: "rewarding", chinese_answer: "有益的", chinese_romanization: "yǒuyì de" },
        { option: "D", answer: "beneficial", chinese_answer: "有利的", chinese_romanization: "yǒulì de" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'punitive' means inflicting or intended as punishment." +
        "<br><br>" +
        "(B) 'lenient' means permissive, merciful, or tolerant." +
        "<br><br>" +
        "(C) 'rewarding' means providing satisfaction; gratifying." +
        "<br><br>" +
        "(D) 'beneficial' means favorable or advantageous; resulting in good.",
    chinese_explanation: "(A) '惩罚性的' 意味着施加或意图作为惩罚的。" +
        "<br><br>" +
        "(B) '宽容的' 意味着宽大的、仁慈的或宽厚的。" +
        "<br><br>" +
        "(C) '有益的' 意味着提供满足感的；令人满意的。" +
        "<br><br>" +
        "(D) '有利的' 意味着有利的或有优势的；导致好的结果的。"
    },
    {
        id: 4,
        question: "Her __________ demeanour after the promotion rejection showed she was deeply affected by the decision.",
        chinese_question: "在升职被拒后，她的 __________ 态度表明她受到了这个决定的深深影响。",
        answers: [
            { option: "A", answer: "elated", chinese_answer: "兴高采烈的", chinese_romanization: "xìnggāocǎiliè de" },
            { option: "B", answer: "sullen", chinese_answer: "阴沉的", chinese_romanization: "yīnchén de" },
            { option: "C", answer: "thrilled", chinese_answer: "激动的", chinese_romanization: "jīdòng de" },
            { option: "D", answer: "excited", chinese_answer: "兴奋的", chinese_romanization: "xīngfèn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sullen' means bad-tempered and sulky; gloomy." +
            "<br><br>" +
            "(A) 'elated' means ecstatically happy." +
            "<br><br>" +
            "(C) 'thrilled' means feeling intense excitement and happiness." +
            "<br><br>" +
            "(D) 'excited' means very enthusiastic and eager.",
        chinese_explanation: "(B) '阴沉的' 意味着脾气暴躁和愠怒的；阴郁的。" +
            "<br><br>" +
            "(A) '兴高采烈的' 意味着欣喜若狂。" +
            "<br><br>" +
            "(C) '激动的' 意味着感到强烈的兴奋和快乐。" +
            "<br><br>" +
            "(D) '兴奋的' 意味着非常热情和渴望的。"
    },
    {
        id: 5,
        question: "The weekend getaway to the beach was incredibly __________, filled with sunshine, relaxation, and good company.",
        chinese_question: "这次海滩周末度假非常 __________，充满了阳光、放松和良好的陪伴。",
        answers: [
            { option: "A", answer: "pleasurable", chinese_answer: "愉快的", chinese_romanization: "yúkuài de" },
            { option: "B", answer: "tedious", chinese_answer: "乏味的", chinese_romanization: "fáwèi de" },
            { option: "C", answer: "distressing", chinese_answer: "令人苦恼的", chinese_romanization: "lìng rén kǔnǎo de" },
            { option: "D", answer: "mundane", chinese_answer: "平凡的", chinese_romanization: "píngfán de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'pleasurable' means giving pleasure; enjoyable." +
            "<br><br>" +
            "(B) 'tedious' means too long, slow, or dull; tiresome or monotonous." +
            "<br><br>" +
            "(C) 'distressing' means causing anxiety, sorrow, or pain; upsetting." +
            "<br><br>" +
            "(D) 'mundane' means lacking interest or excitement; dull.",
        chinese_explanation: "(A) '愉快的' 意味着带来愉悦的；令人享受的。" +
            "<br><br>" +
            "(B) '乏味的' 意味着过长、缓慢或枯燥的；令人厌倦的。" +
            "<br><br>" +
            "(C) '令人苦恼的' 意味着引起焦虑、悲伤或痛苦的；令人不安的。" +
            "<br><br>" +
            "(D) '平凡的' 意味着缺乏兴趣或兴奋的；枯燥的。"
    },
    {
        id: 6,
        question: "His __________ silence during the meeting suggested that he was unhappy with the new policies.",
        chinese_question: "他在会议中的 __________ 沉默表明他对新政策不满意。",
        answers: [
            { option: "A", answer: "enthusiastic", chinese_answer: "热情的", chinese_romanization: "rèqíng de" },
            { option: "B", answer: "animated", chinese_answer: "生动的", chinese_romanization: "shēngdòng de" },
            { option: "C", answer: "sulky", chinese_answer: "闷闷不乐的", chinese_romanization: "mènmèn bù lè de" },
            { option: "D", answer: "engaged", chinese_answer: "参与的", chinese_romanization: "cānyù de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'sulky' means morose, bad-tempered, and resentful; refusing to be cooperative or cheerful." +
            "<br><br>" +
            "(A) 'enthusiastic' means having or showing intense and eager enjoyment, interest, or approval." +
            "<br><br>" +
            "(B) 'animated' means full of life or excitement; lively." +
            "<br><br>" +
            "(D) 'engaged' means busy; occupied; involved.",
        chinese_explanation: "(C) '闷闷不乐的' 意味着忧郁的、脾气暴躁的和愤恨的；拒绝合作或愉快的。" +
            "<br><br>" +
            "(A) '热情的' 意味着有或表现出强烈和渴望的享受、兴趣或认可。" +
            "<br><br>" +
            "(B) '生动的' 意味着充满活力或兴奋；活泼的。" +
            "<br><br>" +
            "(D) '参与的' 意味着忙碌的；被占用的；参与的。"
    },
    {
        id: 7,
        question: "Only a few top executives were __________ to the company's future plans.",
        chinese_question: "只有少数高层管理人员__________地知道公司的未来计划。",
        answers: [
            { option: "A", answer: "unaware", chinese_answer: "不知道的", chinese_romanization: "bù zhīdào de" },
            { option: "B", answer: "oblivious", chinese_answer: "无意识的", chinese_romanization: "wú yìshí de" },
            { option: "C", answer: "privy", chinese_answer: "知情的", chinese_romanization: "zhīqíng de" },
            { option: "D", answer: "ignorant", chinese_answer: "无知的", chinese_romanization: "wúzhī de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'privy' means sharing in the knowledge of (something secret or private). Figuratively, it can mean being informed about confidential matters." +
            "<br><br>" +
            "(A) 'unaware' means having no knowledge of a situation or fact." +
            "<br><br>" +
            "(B) 'oblivious' means not aware of or not concerned about what is happening around one." +
            "<br><br>" +
            "(D) 'ignorant' means lacking knowledge or awareness in general; uneducated or unsophisticated.",
        chinese_explanation: "(C) '知情的'一词意味着分享某些秘密或私密信息的。比喻地，它可以表示了解机密事务的。" +
            "<br><br>" +
            "(A) '不知道的' 意味着对某情况或事实没有了解。" +
            "<br><br>" +
            "(B) '无意识的' 意味着没有意识到或不关心周围发生的事情。" +
            "<br><br>" +
            "(D) '无知的' 意味着总体上缺乏知识或意识的；未受教育的或不成熟的。"
    },
    {
        id: 8,
        question: "His __________ reaction to the minor setback surprised everyone, as they had expected him to handle it calmly.",
        chinese_question: "他对小挫折的 __________ 反应让所有人感到惊讶，因为他们原本以为他会冷静处理。",
        answers: [
            { option: "A", answer: "composed", chinese_answer: "镇定的", chinese_romanization: "zhèndìng de" },
            { option: "B", answer: "peevish", chinese_answer: "易怒的", chinese_romanization: "yìnù de" },
            { option: "C", answer: "unruffled", chinese_answer: "平静的", chinese_romanization: "píngjìng de" },
            { option: "D", answer: "serene", chinese_answer: "宁静的", chinese_romanization: "níngjìng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'peevish' means easily irritated, especially by unimportant things." +
            "<br><br>" +
            "(A) 'composed' means having one's feelings and expression under control; calm." +
            "<br><br>" +
            "(C) 'unruffled' means not disordered or disarranged; calm." +
            "<br><br>" +
            "(D) 'serene' means calm, peaceful, and untroubled.",
        chinese_explanation: "(B) '易怒的' 意味着特别容易被琐碎的事情激怒。" +
            "<br><br>" +
            "(A) '镇定的' 意味着控制自己的情感和表情；冷静的。" +
            "<br><br>" +
            "(C) '平静的' 意味着没有混乱或扰乱的；冷静的。" +
            "<br><br>" +
            "(D) '宁静的' 意味着平静的、和平的和无忧无虑的。"
    },
    {
        id: 9,
        question: "The child's __________ behavior, characterized by frequent tantrums and whining, made it difficult for the parents to enjoy their vacation.",
        chinese_question: "孩子 __________ 的行为，频繁的发脾气和抱怨，使父母很难享受他们的假期。",
        answers: [
            { option: "A", answer: "petulant", chinese_answer: "任性的", chinese_romanization: "rènxìng de" },
            { option: "B", answer: "cheerful", chinese_answer: "快乐的", chinese_romanization: "kuàilè de" },
            { option: "C", answer: "patient", chinese_answer: "有耐心的", chinese_romanization: "yǒu nàixīn de" },
            { option: "D", answer: "agreeable", chinese_answer: "令人愉快的", chinese_romanization: "lìng rén yúkuài de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'petulant' means childishly sulky or bad-tempered." +
            "<br><br>" +
            "(B) 'cheerful' means noticeably happy and optimistic." +
            "<br><br>" +
            "(C) 'patient' means able to accept or tolerate delays, problems, or suffering without becoming annoyed or anxious." +
            "<br><br>" +
            "(D) 'agreeable' means enjoyable and pleasurable; pleasant.",
        chinese_explanation: "(A) '任性的' 意味着孩子气的生气或坏脾气的。" +
            "<br><br>" +
            "(B) '快乐的' 意味着明显快乐和乐观的。" +
            "<br><br>" +
            "(C) '有耐心的' 意味着能够接受或忍受延误、问题或痛苦而不变得恼怒或焦虑的。" +
            "<br><br>" +
            "(D) '令人愉快的' 意味着令人愉快的和令人高兴的；愉快的。"
    },
    {
        id: 10,
        question: "The audience was __________ after the concert, applauding and cheering for several minutes.",
        chinese_question: "演唱会结束后，观众们感到 __________，鼓掌欢呼了好几分钟。",
        answers: [
            { option: "A", answer: "indifferent", chinese_answer: "无动于衷的", chinese_romanization: "wúdòngyúzhōng de" },
            { option: "B", answer: "disinterested", chinese_answer: "不感兴趣的", chinese_romanization: "bù gǎnxìngqù de" },
            { option: "C", answer: "ecstatic", chinese_answer: "狂喜的", chinese_romanization: "kuángxǐ de" },
            { option: "D", answer: "unenthusiastic", chinese_answer: "不热情的", chinese_romanization: "bù rèqíng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'ecstatic' means feeling or expressing overwhelming happiness or joyful excitement." +
            "<br><br>" +
            "(A) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(B) 'disinterested' means not influenced by considerations of personal advantage." +
            "<br><br>" +
            "(D) 'unenthusiastic' means not having or showing enthusiasm.",
        chinese_explanation: "(C) '狂喜的' 意味着感到或表达极大的幸福或喜悦的。" +
            "<br><br>" +
            "(A) '无动于衷的' 意味着没有特别兴趣或同情的；不关心的。" +
            "<br><br>" +
            "(B) '不感兴趣的' 意味着不受个人利益考虑影响的。" +
            "<br><br>" +
            "(D) '不热情的' 意味着没有表现出热情的。"
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
