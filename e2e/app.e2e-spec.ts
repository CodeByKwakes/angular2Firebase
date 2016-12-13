import { FinalAngularFirebasePage } from './app.po';

describe('final-angular-firebase App', function() {
  let page: FinalAngularFirebasePage;

  beforeEach(() => {
    page = new FinalAngularFirebasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
