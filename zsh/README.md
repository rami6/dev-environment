## Basic set up
1. Install Zsh
1. Install [Oh My Zsh](https://ohmyz.sh/)  
1. Set up [Powerlevel10k](https://github.com/romkatv/powerlevel10k)
1. Set a nice color scheme
    - Mac (iTerm): https://iterm2colorschemes.com/
    - Windows: https://windowsterminalthemes.dev/

## Shell Options
`setopt AUTO_CD`  
`setopt APPEND_HISTORY`

## Alias
1. Create `~/.zsh_funcs` directory
1. Add `fpath=( ~/.zsh_funcs "${fpath[@]}" )` to `.zshrc` 
1. Add functions under `.zsh_funcs`, then run `autoload <func name>`.

## References
- https://scriptingosx.com/2019/06/moving-to-zsh-part-3-shell-options/
- Color schemes I liked:
  ![image](https://user-images.githubusercontent.com/30137645/113669635-e2287700-9668-11eb-901c-0238f7527a0f.png)
