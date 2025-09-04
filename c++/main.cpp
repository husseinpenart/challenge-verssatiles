#include <iostream>
#include <SDL2/SDL.h>

int main(int argc, const char **argv)
{
    // initalazation the sdl2
    if (SDL_Init(SDL_INIT_VIDEO) != 0)
    {
        std::cout << "SDL_Init Error: " << SDL_GetError() << std::endl;
        return 1;
    }
    // CREATING WINDOW
    SDL_Window *win = SDL_CreateWindow(
        "Sdl window",    // title
        100, 100,        // postion x , y
        640, 480,        // window size
        SDL_WINDOW_SHOWN // flag

    );
    // quite the window
    if (win == nullptr)
    {
        std::cout << "SDL_CreateWindow Error: " << SDL_GetError() << std::endl;
        SDL_Quit();
        return 1;
    }
    // 3. ایجاد renderer (برای رسم روی پنجره)
    SDL_Renderer *ren = SDL_CreateRenderer(win, -1, SDL_RENDERER_ACCELERATED | SDL_RENDERER_PRESENTVSYNC);
    if (ren == nullptr)
    {
        SDL_DestroyWindow(win);
        std::cout << "SDL_CreateRenderer Error: " << SDL_GetError() << std::endl;
        SDL_Quit();
        return 1;
    }
    /// drawing a box
    // chaning the background color
    SDL_SetRenderDrawColor(ren, 203, 88, 255, 0.8);
    SDL_Rect rect = {200, 150, 240, 180};
    SDL_RenderFillRect(ren, &rect);
    SDL_RenderClear(ren);
    SDL_RenderPresent(ren);

    SDL_SetRenderDrawColor(ren, 255, 0, 0, 255); // مستطیل قرمز
    // waiting for user to close the windows
    SDL_Event e;
    bool quit = false;
    while (!quit)
    {
        while (SDL_PollEvent(&e))
        {
            if (e.type == SDL_QUIT)
            {
                quit = true;
            }
            if (e.type == SDL_KEYDOWN)
            {
                switch (e.key.keysym.sym)
                {
                case SDLK_UP:
                    rect.y -= 10;
                    break;
                case SDLK_DOWN:
                    rect.y += 10;
                    break;
                case SDLK_LEFT:
                    rect.x -= 10;
                    break;
                case SDLK_RIGHT:
                    rect.x += 10;
                    break;
                }
            }
        }
        // clearing the source
        SDL_DestroyRenderer(ren);
        SDL_DestroyWindow(win);
        SDL_Quit();

        return 0;
    }
}