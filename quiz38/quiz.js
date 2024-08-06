// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "His __________ attitude made it difficult for others to work with him, as he often disregarded their opinions and imposed his own ideas.",
    chinese_question: "他的__________态度使得别人很难与他共事，因为他经常无视他人的意见并强加自己的想法。",
    answers: [
        { option: "A", answer: "humble", chinese_answer: "谦虚的", chinese_romanization: "qiānxū de" },
        { option: "B", answer: "meek", chinese_answer: "温顺的", chinese_romanization: "wēnshùn de" },
        { option: "C", answer: "overbearing", chinese_answer: "专横的", chinese_romanization: "zhuānhèng de" },
        { option: "D", answer: "submissive", chinese_answer: "顺从的", chinese_romanization: "shùncóng de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'overbearing' means unpleasantly or arrogantly domineering." +
        "<br><br>" +
        "(A) 'humble' means having or showing a modest or low estimate of one's importance." +
        "<br><br>" +
        "(B) 'meek' means quiet, gentle, and easily imposed on; submissive." +
        "<br><br>" +
        "(D) 'submissive' means ready to conform to the authority or will of others; meekly obedient or passive.",
    chinese_explanation: "(C) '专横的' 意味着令人不愉快地或傲慢地专横的。" +
        "<br><br>" +
        "(A) '谦虚的' 意味着对自己的重要性有或表现出谦逊或低估的。" +
        "<br><br>" +
        "(B) '温顺的' 意味着安静的、温和的和容易被强加的；顺从的。" +
        "<br><br>" +
        "(D) '顺从的' 意味着准备服从他人权威或意志的；温顺地服从的或被动的。"
    },
    {
        id: 2,
        question: "The __________ creature emerged from the shadows, its huge size and terrifying appearance sending everyone into a panic.",
        chinese_question: "__________ 的生物从阴影中出现，其巨大而可怕的外貌使每个人都陷入了恐慌。",
        answers: [
            { option: "A", answer: "monstrous", chinese_answer: "怪异的", chinese_romanization: "guàiyì de" },
            { option: "B", answer: "tiny", chinese_answer: "微小的", chinese_romanization: "wéixiǎo de" },
            { option: "C", answer: "delicate", chinese_answer: "精致的", chinese_romanization: "jīngzhì de" },
            { option: "D", answer: "graceful", chinese_answer: "优雅的", chinese_romanization: "yōuyǎ de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'monstrous' means having the ugly or frightening appearance of a monster; extremely large." +
            "<br><br>" +
            "(B) 'tiny' means very small." +
            "<br><br>" +
            "(C) 'delicate' means very fine in texture or structure; of intricate workmanship or quality." +
            "<br><br>" +
            "(D) 'graceful' means having or showing grace or elegance.",
        chinese_explanation: "(A) '怪异的' 意味着具有怪物的丑陋或可怕外表；极大的。" +
            "<br><br>" +
            "(B) '微小的' 意味着非常小的。" +
            "<br><br>" +
            "(C) '精致的' 意味着结构或质地非常精细的；制作精细的。" +
            "<br><br>" +
            "(D) '优雅的' 意味着具有或表现出优雅或优美的。"
    },
    {
        id: 3,
        question: "Even in the face of mounting challenges, the team's leader remained __________, inspiring others to stay hopeful.",
        chinese_question: "即使面对越来越多的挑战，团队的领导者仍然保持 __________，激励其他人保持希望。",
        answers: [
            { option: "A", answer: "despondent", chinese_answer: "沮丧的", chinese_romanization: "jǔsàng de" },
            { option: "B", answer: "resigned", chinese_answer: "顺从的", chinese_romanization: "shùncóng de" },
            { option: "C", answer: "sanguine", chinese_answer: "乐观的", chinese_romanization: "lèguān de" },
            { option: "D", answer: "hopeless", chinese_answer: "绝望的", chinese_romanization: "juéwàng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'sanguine' means optimistic or positive, especially in an apparently bad or difficult situation." +
            "<br><br>" +
            "(A) 'despondent' means in low spirits from loss of hope or courage." +
            "<br><br>" +
            "(B) 'resigned' means having accepted something unpleasant that one cannot do anything about." +
            "<br><br>" +
            "(D) 'hopeless' means feeling or causing despair about something.",
        chinese_explanation: "(C) '乐观的' 意味着在看似糟糕或困难的情况下，仍保持乐观或积极。" +
            "<br><br>" +
            "(A) '沮丧的' 意味着因失去希望或勇气而情绪低落的。" +
            "<br><br>" +
            "(B) '顺从的' 意味着接受了某些自己无法改变的不愉快的事情。" +
            "<br><br>" +
            "(D) '绝望的' 意味着对某事感到或引起绝望。"
    },
    {
        id: 4,
    question: "His __________ attitude during the serious discussion made others question his commitment to the project.",
    chinese_question: "他在严肃讨论中的 __________ 态度让其他人质疑他对项目的投入。",
    answers: [
        { option: "A", answer: "attentive", chinese_answer: "专心的", chinese_romanization: "zhuānxīn de" },
        { option: "B", answer: "engaged", chinese_answer: "投入的", chinese_romanization: "tóurù de" },
        { option: "C", answer: "nonchalant", chinese_answer: "漠不关心的", chinese_romanization: "mòbùguānxīn de" },
        { option: "D", answer: "interested", chinese_answer: "感兴趣的", chinese_romanization: "gǎn xìngqù de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'nonchalant' means feeling or appearing casually calm and relaxed; not displaying anxiety, interest, or enthusiasm." +
        "<br><br>" +
        "(A) 'attentive' means paying close attention to something." +
        "<br><br>" +
        "(B) 'engaged' means involved in or occupied with something." +
        "<br><br>" +
        "(D) 'interested' means showing curiosity or concern about something or someone.",
    chinese_explanation: "(C) '漠不关心的' 意味着感觉或表现得漫不经心、冷静和放松；不表现出焦虑、兴趣或热情。" +
        "<br><br>" +
        "(A) '专心的' 意味着密切注意某事的。" +
        "<br><br>" +
        "(B) '投入的' 意味着参与或专注于某事的。" +
        "<br><br>" +
        "(D) '感兴趣的' 意味着对某事或某人表现出好奇或关心的。"
    },
    {
        id: 5,
    question: "Consuming that wild mushroom can be __________, as it contains toxins that are deadly to humans.",
    chinese_question: "食用那种野生蘑菇可能是 __________ 的，因为它含有对人体致命的毒素。",
    answers: [
        { option: "A", answer: "nutritious", chinese_answer: "有营养的", chinese_romanization: "yǒu yíngyǎng de" },
        { option: "B", answer: "fatal", chinese_answer: "致命的", chinese_romanization: "zhìmìng de" },
        { option: "C", answer: "beneficial", chinese_answer: "有益的", chinese_romanization: "yǒuyì de" },
        { option: "D", answer: "healthful", chinese_answer: "有益健康的", chinese_romanization: "yǒuyì jiànkāng de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'fatal' means causing death." +
        "<br><br>" +
        "(A) 'nutritious' means efficient as food; nourishing." +
        "<br><br>" +
        "(C) 'beneficial' means resulting in good; favorable or advantageous." +
        "<br><br>" +
        "(D) 'healthful' means conducive to good health.",
    chinese_explanation: "(B) '致命的' 意味着导致死亡的。" +
        "<br><br>" +
        "(A) '有营养的' 意味着作为食物有效的；有营养的。" +
        "<br><br>" +
        "(C) '有益的' 意味着产生好的结果；有利的或有利的。" +
        "<br><br>" +
        "(D) '有益健康的' 意味着有助于健康的。"
    },
    {
        id: 6,
    question: "Her __________ smile and charming personality made her the most popular student in the class.",
    chinese_question: "她 __________ 的微笑和迷人的个性使她成为班上最受欢迎的学生。",
    answers: [
        { option: "A", answer: "stern", chinese_answer: "严厉的", chinese_romanization: "yánlì de" },
        { option: "B", answer: "winsome", chinese_answer: "迷人的", chinese_romanization: "mírén de" },
        { option: "C", answer: "gloomy", chinese_answer: "忧郁的", chinese_romanization: "yōuyù de" },
        { option: "D", answer: "aloof", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'winsome' means attractive or appealing in appearance or character." +
        "<br><br>" +
        "'stern' means serious and unrelenting, especially in the assertion of authority and exercise of discipline." +
        "<br><br>" +
        "'gloomy' means dark or poorly lit, especially so as to appear depressing or frightening." +
        "<br><br>" +
        "'aloof' means not friendly or forthcoming; cool and distant.",
    chinese_explanation: "(B) '迷人的' 意味着在外表或性格上有吸引力或有魅力的。" +
        "<br><br>" +
        "'严厉的' 意味着特别在权威的主张和行使纪律方面严肃而不屈不挠。" +
        "<br><br>" +
        "'忧郁的' 意味着黑暗或光线不足，尤其是看起来令人沮丧或可怕的。" +
        "<br><br>" +
        "'冷漠的' 意味着不友好或不热情；冷漠和疏远的。"
    },
    {
        id: 7,
    question: "She faced a __________ of challenges, but her determination helped her overcome them all.",
    chinese_question: "她面临__________的挑战，但她的决心帮助她克服了所有困难。",
    answers: [
        { option: "A", answer: "few", chinese_answer: "几个", chinese_romanization: "jǐ gè" },
        { option: "B", answer: "pair", chinese_answer: "一对", chinese_romanization: "yī duì" },
        { option: "C", answer: "myriad", chinese_answer: "无数的", chinese_romanization: "wúshù de" },
        { option: "D", answer: "dozen", chinese_answer: "一打", chinese_romanization: "yī dá" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'myriad' means a countless or extremely great number. Figuratively, it can mean a large and varied set of difficulties or obstacles." +
        "<br><br>" +
        "(A) 'few' means a small number of." +
        "<br><br>" +
        "(B) 'pair' means two things of the same sort considered together." +
        "<br><br>" +
        "(D) 'dozen' means a group or set of twelve.",
    chinese_explanation: "(C) '无数的' 一词意味着无数的或极多的数量。比喻地，它可以表示大量和多样化的困难或障碍。" +
        "<br><br>" +
        "(A) '几个' 意味着少量的。" +
        "<br><br>" +
        "(B) '一对' 意味着两件同类事物一起考虑。" +
        "<br><br>" +
        "(D) '一打' 意味着一组或一套十二个。"
    },
    {
        id: 8,
        question: "The __________ billionaire was known for his reluctance to donate to charity, despite his vast wealth.",
        chinese_question: "这位 __________ 的亿万富翁以不愿意捐赠慈善机构而闻名，尽管他非常富有。",
        answers: [
            { option: "A", answer: "generous", chinese_answer: "慷慨的", chinese_romanization: "kāngkǎi de" },
            { option: "B", answer: "extravagant", chinese_answer: "奢侈的", chinese_romanization: "shēchǐ de" },
            { option: "C", answer: "parsimonious", chinese_answer: "吝啬的", chinese_romanization: "lìnsè de" },
            { option: "D", answer: "lavish", chinese_answer: "奢华的", chinese_romanization: "shēhuá de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'parsimonious' means unwilling to spend money or use resources; stingy or frugal." +
            "<br><br>" +
            "(A) 'generous' means showing a readiness to give more of something, especially money, than is strictly necessary or expected." +
            "<br><br>" +
            "(B) 'extravagant' means lacking restraint in spending money or using resources." +
            "<br><br>" +
            "(D) 'lavish' means sumptuously rich, elaborate, or luxurious.",
        chinese_explanation: "(C) '吝啬的' 意味着不愿花钱或使用资源的；吝啬的或节俭的。" +
            "<br><br>" +
            "(A) '慷慨的' 意味着表现出愿意给予比严格必要或预期更多的东西，尤其是金钱。" +
            "<br><br>" +
            "(B) '奢侈的' 意味着在花钱或使用资源方面缺乏克制的。" +
            "<br><br>" +
            "(D) '奢华的' 意味着极其富有、复杂或豪华的。"
    },
    {
        id: 9,
        question: "The __________ applause from the audience showed their appreciation for the breathtaking performance.",
        chinese_question: "观众的 __________ 掌声显示了他们对这场惊艳表演的赞赏。",
        answers: [
            { option: "A", answer: "quiet", chinese_answer: "安静的", chinese_romanization: "ānjìng de" },
            { option: "B", answer: "soft", chinese_answer: "柔和的", chinese_romanization: "róuhé de" },
            { option: "C", answer: "thunderous", chinese_answer: "雷鸣般的", chinese_romanization: "léimíng bān de" },
            { option: "D", answer: "mild", chinese_answer: "温和的", chinese_romanization: "wēnhé de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'thunderous' means very loud." +
            "<br><br>" +
            "(A) 'quiet' means making little or no noise." +
            "<br><br>" +
            "(B) 'soft' means having a pleasing quality involving a subtle effect or contrast rather than sharp definition." +
            "<br><br>" +
            "(D) 'mild' means not severe, serious, or harsh.",
        chinese_explanation: "(C) '雷鸣般的' 意味着非常响亮的。" +
            "<br><br>" +
            "(A) '安静的' 意味着发出很少或没有噪音的。" +
            "<br><br>" +
            "(B) '柔和的' 意味着具有令人愉快的品质，包含细微的效果或对比，而不是鲜明的定义。" +
            "<br><br>" +
            "(D) '温和的' 意味着不严重、不激烈或不苛刻的。"
    },
    {
        id: 10,
        question: "In a __________ act, he forgave the colleague who had undermined his project, choosing instead to help them improve.",
        chinese_question: "在一个 __________ 的行为中，他原谅了那个破坏他项目的同事，选择帮助他们提高。",
        answers: [
            { option: "A", answer: "malicious", chinese_answer: "恶意的", chinese_romanization: "èyì de" },
            { option: "B", answer: "magnanimous", chinese_answer: "宽宏大量的", chinese_romanization: "kuānhóngdàliàng de" },
            { option: "C", answer: "grudging", chinese_answer: "勉强的", chinese_romanization: "miǎnqiáng de" },
            { option: "D", answer: "vindictive", chinese_answer: "报复的", chinese_romanization: "bàofù de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'magnanimous' means very generous or forgiving, especially toward a rival or someone less powerful." +
            "<br><br>" +
            "(A) 'malicious' means characterized by malice; intending or intended to do harm." +
            "<br><br>" +
            "(C) 'grudging' means given, granted, or allowed only reluctantly or resentfully." +
            "<br><br>" +
            "(D) 'vindictive' means having or showing a strong or unreasoning desire for revenge.",
        chinese_explanation: "(B) '宽宏大量的' 意味着非常慷慨或宽容的，尤其是对竞争对手或权力较小的人。" +
            "<br><br>" +
            "(A) '恶意的' 意味着以恶意为特征；意图或企图伤害的。" +
            "<br><br>" +
            "(C) '勉强的' 意味着不情愿或愤慨地给予、准许或允许的。" +
            "<br><br>" +
            "(D) '报复的' 意味着有或表现出强烈或无理的报复欲望的。"
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
