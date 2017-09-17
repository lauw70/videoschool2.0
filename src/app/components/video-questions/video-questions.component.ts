import {Component, OnInit} from '@angular/core';
import {SearchPipe} from "../../pipes/search.pipe";

@Component({
    selector: 'app-video-questions',
    templateUrl: './video-questions.component.html',
    styleUrls: ['./video-questions.component.css']
})
export class VideoQuestionsComponent implements OnInit {
    questions: Question[];
    title: string;
    inputPlaceholder: string;
    searchValue: string;
    questionCard: Question;
    viewingQuestion: boolean;

    maxQuestionsInList: number;

    constructor() {
    }

    ngOnInit() {
        this.title = 'Veel gestelde vragen';
        this.inputPlaceholder = 'Vraag';
        this.maxQuestionsInList = 3;
        this.viewingQuestion = false;


        this.questions = [
            {
                id: 1,
                title: 'Hoe vermenigvuldig je 2 en 3?',
                question: 'Hoe vermenigvuldig je 2 en 3. Ik heb overal zitten zoeken. Maar ik kan het nergens vinden, Help.',
                answer: 'Je telt drie keer het getal 2 bij elkaar op. Dan kom je uit op 6. Dan kom je uit op 6.Dan kom je uit op 6.Dan kom je uit op 6Je telt drie keer het getal 2 bij elkaar op. Dan kom je uit op 6. Dan kom je uit op 6.Dan kom je uit op 6.Dan kom je uit op 6Je telt drie keer het getal 2 bij elkaar op. Dan kom je uit op 6. Dan kom je uit op 6.Dan kom je uit op 6.Dan kom je uit op 6Je telt drie keer het getal 2 bij elkaar op. Dan kom je uit op 6. Dan kom je uit op 6.Dan kom je uit op 6.Dan kom je uit op 6'
            },
            {
                id: 2,
                title: 'Twee keer 5?',
                question: 'Ik heb een beetje zitten rondzoeken op het internet, maar ik kan nergens vinden hoe je nou zo\'n som doet',
                answer: 'Je telt twee keer het getal 5 bij elkaar op. Dan kom je uit op 10'
            },
            {
                id: 3,
                title: '2 x 3?',
                question: 'Hoe vermenigvuldig je 2 en 3',
                answer: 'Je telt drie keer het getal 2 bij elkaar op. Dan kom je uit op 6'
            },
            {
                id: 4,
                title: '2 x 3?',
                question: 'Hoe vermenigvuldig je 2 en 3',
                answer: 'Je telt drie keer het getal 2 bij elkaar op. Dan kom je uit op 6'
            },
        ];

        this.questionCard = this.questions[0];
    }

    public setQuestion(q: Question) {
        this.questionCard = q;
        this.viewingQuestion = true;
    }

    public closeQuestionCard() {
        this.viewingQuestion = false;
    }

    public searchSubmit() {
        const searchResults = new SearchPipe().transform(this.questions, this.searchValue);
        if (searchResults.length < 1) {
            return;
        }
        this.setQuestion(searchResults[0]);
    }

}


interface Question {
    id: number;
    title: string;
    question: string;
    answer: string;
}

