import { from, Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";

export default class AppUtils {

    static checkCardType(value: any, cardType: any) {
        let imgUrl: any;
        if (value && parseInt(value) !== NaN) {
            let urlData: any;
            urlData = cardType.find((item: any) => item.startSeries === value.charAt(0));
              imgUrl = urlData && urlData.imgUrl;
            return imgUrl;
          }
        imgUrl = 'https://img.icons8.com/color/40/000000/bank-card-back-side.png';
        return imgUrl;
    }

    static confirmModal(prompt:any, title:any, component: any, modalService: any): Observable<any> {
        const modal = modalService.open(
            component, {backdrop: 'static'});
         modal.componentInstance.prompt = prompt;
         modal.componentInstance.title = title;
         return from(modal.result).pipe(catchError(error => {console.warn(error);
            return of(undefined);
             })
         );

    }
}