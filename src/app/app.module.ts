import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article-component/article.component';
import { ArticleContentComponent } from './article-component/article-content-component/article-content.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ArticleComponent, ArticleContentComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
