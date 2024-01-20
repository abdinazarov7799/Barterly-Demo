const mockData = {
    categories: [
        {
            id: 1,
            category: 'Automobiles'
        }
    ],
    products: [
        {
            id: 1,
            category_id: 1,
            image: "https://telegra.ph/file/6d6c8319088987605d22b.jpg",
            cost: 24000,
            name: 'Bmw 7 series',
            year: 2001,
            milage: 24300,
            cost_type: 'straight',
            second_cost: 26000,
            description: 'Bumer',
        },
        {
            id: 2,
            category_id: 1,
            image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALcAwgMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAAECBwj/xABCEAACAQIFAQUEBgkDBAIDAAABAgMEEQAFEiExQQYTIlFhFHGBkSMyQlKhsQcVYnKCwdHh8DOSohYkQ/FEUxc1c//EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAIhEBAQEAAgICAwEBAQAAAAAAAAERAiESMQNBE1FhIhQE/9oADAMBAAIRAxEAPwCp5fT1VNVx0FVlUNRL7SQJJbaHbSPCWAv628/dg4Zd3CSVdVl8EemeSyMFPesCRYLuOhvwL4m/WHeVBo1qJY6Y2KRRoglkJvd3LcXN91AN+o2xDS1C0NJHNEG9qjmY2mm1qPFY6x5G5sfTzN8Y5Zik2YTR0NWsdbQRhWAKxlVa1genUf388BuZ9L1UdUkcLsGJRdFj+7tf4HBObRLmVcKuSTu4Ior2Au2xP1B5eh/nssdKP21RPDVpR6BpGjxW6m553B3+Q8s40a07rUOjM0NSIVOuTkgceIH3c72wZWrXPAkVTUxNCv1IYw2tQLeewuObk7AbHC6lnoKOol9lYImj6OYs1mPG68E8kHA0001bPImjVM2m7KuktsCLbWtwfdiSotPZXKaioqJZY6+ipVmLJMGs8xvv4ALki9r3I/PHr9FU5Z2boIaN5Q1R3au+khnmZjb4nn4b48py7tDnIlpy8MRqKYAanpE1cEAkiwLDyO242va5PtGcQO2bn2moaVVnM5sLENpXe91Xkaut7+uO3HlGLK9l9thhhikqZo1aQjSpYDVfgDzP52wFWZxT0VekNWdMU4IjYgm0gF9Bt5jcet/TFPyXKc8qWGcd6tNLKWMllvJoII8Jdjbjz3tyOcL+2zt39PLFJ7dTi0ZLuUaJhbxPbcG/BFvd5b3GFuz/ADcxRy0VPMKadkJjEijxXGwubW999uCDiiSdrGpRLS11Oyx7mRQ+ghvvbbsedzzz5HCqt7QGRhJGxOnV38csPG99Vza4NjziSnrkqq32qF0OpRqjjiVVkB4Pp77+lumOHPnrchXU1UFRalare4Ld2720pYbqxPv5A6W8xiE5pClhSu5KnSpcagWvcEtwDfbn5YbChpfaYa5p+4YCx1AapT0uQPF7h64r89LDJXypNGkaiYSE2NmtYg6TtuLbX6+oxy6rZxVZhLDT2hMU0EKkynWyvf37noTx192EyZmJKmOOSkjimDaBI17rsbNY7Ha+35Y7qMuh73TFG8veENGHJGgNa53IvZjx7+uJv+nzlcpqa0qywxDWSLgEjnY2HB/wbP8AI6Kw5bBJJJO5QkNE6gBSLW4twD8rYXvUZik0Ta5KhFZgjRprjNwPCD8Tfj8cCyw1SJI0rU70zMA3eAFogSLW6jkD4cYsWR5bRNlypIAJzqUODYsCL3XqLjqOBi9QAVkMsqlsylUzXsCzFe7X94g787X99hh/kudPDAaOnql+lQL3qrbXybb/AGfiL7YRU+WOapovaIzTIxaWQE/UPAOx6b89R54dCekp6VUpEi1RsAgVh4zp923BxLf0ZFo7OZwqoZc0mWCGFO4HdMdQAtcE+W/I449cXbs/n1JmRMFJEIY4z3axk2IsLi4HB24v0332x5EKlZkeTMYDEoLb6dKlLi4J43ta+97nDfKe0stbW+0UsipGIwBz9Gd/EATzza23Q47cPk67Ys/T1emrIqnvGhdWhTwFvW5/pieWRIrCXYM2m52ubE7+XGPO07YU9BE1HJHNBAPCYtBMkgba4ZrgE77YVVvbe+XzxTVPtkCNtMHCOpGw/G3Pzx0/JExeqjtVBDUSxNS1RKOVJ0c2PvxvHlUP6Ro4okj1N4FC+KRCdvPbGYfkhitVtFNGEeCGGO6lBZipJN7lh5WxHJJVJVwpIscJ06XkVVs3r4RcDobHbE+ZUxqikhrEHdkr9INICjhTvYDa39ME01FFNCkNRBLG+gaRB4kP7V/K/qbc9ccLjohaaOYCFlRdOkrIDpGo3UabG/wsPhziKsZAkixRyVRBAMbHUrA2Fifd9pdubYkzOqoaZmEYNRM5BOlT9Gg6qeDv19fdhbBSZdVVpYNUhHJKJHMG295HqNvd1wgOly3L6ipWWrkmhAUtLT93YEgG+w+HxwclRTGSMww91fUuvcEAbW1W9Od+OtxgLMJClO0lHRhBTugVCDJIR1MjW67Cw43wrrEljIaenhVpB4GQX0/s+lvy92BVwyGgqc97uny7uYYA15UNVax99wSPXqSMev8AZamo6GgNLG9PK7El+6bVqAA+sTfV78eF0YZKCMSS6UYEuiOiMFNuCDYnwjpff5vMtXMa6oByYSvMoDlUlKCwbcM1iLj0N+Mb4XKzfS8do+1WY5Vm6QpHYqSVWYxksuxKeE+hs3SwvcnFOz3MBmEz1dKVMcrBagSskej1B9QF4tuemFnaHLHpSJqw11NIt1mMTCZdZW9zINhseD5Hre60Uy1WXgUOnUtvpp2061uTbi19t/7YfJb9pDUUUNbVR1JFP7QlgSJDY9N+l7Xv5jzxPJl1O8rvRXjqUUXI5cgWC7jfj8vPCTs/DVUiRVEyyuqS+BD4CelgTsd+h5t7jhjUZbWyzRVVFVNDpZwsX1lBB2HmFO21uR5i+ONbbp8vqongpWWPSyO7KbrZhup8PNifd6Y7yvLMwrqYrVWp0jvEIkOxPHHrfrzYeuB56qVKE01RWyQTwBdd4R4lIUWt1F7i46232wTU5jUxRJFLUaIUiuNCDWdjctfZfyNyOmM9hhVd3RK6sys6ELCqoW2v59OD/nCvMcpq58u9meSRdekne+kEgnrY8WHS4+OAnrqiLQ8UTVFiO8tIJOdyTpHivxYC2wtfkmSZrV90auprKWRdBtZSreg6gbketj0xZ0J4cjp4IoZnYL4Qnsk7AhSRz1B5Ivt04uMarzFKkRWRItI1J9JshUW8/wAPfjqrpBVdyiCohkZj3jI2llt0Ukbj/B5YRZjSA5qolqYhGBqdF8LKp33IFjxb3fPF2UETZzTtTy09QsheE65ZXp1TxH71r9LWtc7D340Iq9aBZo41qFlU6tBKMVsDz5m9rdbYTxnuEX25G7wsWhEjHu5EBvuV56c3FuMP6OtzGnhjVNDLGpVxHoVI+Cbng9d/7XcsikJrneSJ62WRozcHUPG54IYX3AAHT88XKiRKeFJqWSnRTHqaOKI6ySA1gdrXI6jjphZO1K0bwVFHEHqXWIy04A+CEja1rC425xDSVyVFUO7LvLpLI2vUSi/e2GkE7f5vLdDmozRUSM1tHFN3u6sg4j03BUdVte+3x2vgGiy1xqlWohkpqmM2kEWk2B2IB68HjphhS5rRVVNI7wJFFcpGUa19t18r3Y73PXA1THHLTRwSqtPGrM0MkINmvwN+CNudsYtqmKMiooWmhCgbWp1O3zxmKOZc/Q6PZZm07XFPqB+N9/fjMXKOaatplmUQxuJHARjKA5Xfni48+MF1VbK766ZjKsgNw8yIRv6ni23w9xwTJNU01LJJQmlSpnIYO+5dbDb8P5YX0tEaWGOV6Q+0yIzLJ3dxGP3eRwNx5n0x16ZgGrqHnk9lrYyWBXQI5NYF/W/O/A9ccU1OtIjNVRNoI06hLb1tz6Y4AilkA7rUA9gyk2YeXmNvz4wW1To00kNBTAk6dJjsx8uf7841phvSMlNR2oGnNwzuj34tYeLg8bY7lip6u61cTxo3Jc6QGA28I3+1z7/XC2SrSkl+osEkqgHxNoDbckGx9dvLAi1Ekla9OkUkjSNpVEKubmxFvnfjnriYlp/MaWniEdLShWiDGPUhFzY6RY7nnYbnDbs7mcdLHNDms7yGqDJZfqwkg6kGm/3huB9kdN8VwUc+X1NOz5fIskpsjnU6lSSTt8ed7jy4xNL7QjNS1IglpYAymami2Nt7qeB5bW3J2xe4i/Zp2xy3L8oWmpYKmlSRb2nKXf3gG/Ug35533GKk0Ms8MlZJQdzFLGZElRNGsea/K99vyuuM8aSwzrlxaVABBGZPGovsbEG5PJO58sEFK6sidqqpqIS0baaaJgXK3F9lBvcny9/nhu+zMBZRVlMt0O0veRnUHZXfSL9dwOmDJDNPVwmnnkqJCljOviVBxYrew9/vwPVRS5dGkdfJGbsxVXe8fh41C3IvsD13PTBBq+9R/a3UQRjSG75YlNwSLcEm1sYqwS9LHOkUlRPJHLRtctHrFwTwCb6vK1+pOOVyiB6ySoZY5KYQo+iO7BbCw02txbyPQ7Y1lmW0cbrVZWrjXbvEdm32PO5ubkfjtgmsNW2XxuUWmEV1cg/SRmykW2sefQXHXYYz39KAqstel1U1NTK9OzBYoXcEkbg+RHF77nfe9sA1sVfl1bLWQyxdyZO7WTVb7IUC9j4R18xv64PyjOpaiq0NP3sjuRCNI2AB3J93T3cYZPFSmpeor545JQSFRRpSNDzf4E3JOLoW0U7SJHHNH3zm3hYmQrwNjawHvJv69TJ8rq5amyCnWmJBqVkRSp2uSLA3Ntt7cDbfBLpTZck0FLDKO9ke80bEmNvPg826DbfbBFTVCggjCs0ga99FyRxyePifhvjPoK5KfL4LBZIpJQneCSMXZQ1vqrbe23GxOE9RlQpK8NSTXM3GsCK+ocnbgb3t+GLBDPDSsWo07pvEzRsyGwI4C3AF7bDz3POOqk0TRiOWCKnB3RJQFF23K39Tv5WxZySq1DJWxyO+l5VQbFXBjvsAdwTawtx5Yirayj1yLSRhpGteV7WuOnPHHvtvtgt5e9rKulKiAswVVEfoBcG4vt4R5WGE701R3M7yRlYi+hGe4t1uAOtt8ame0MKHO0R5IfZUkkmH0aw2VUctuSOvuFumG8NSU7qER+3KrL3iGMp3RPSx6bnbrtihzL9LoSNk23G/88H09dNFTiNDUIZBcd3IbsSRubWPGN3jKururZg6h4ammjjYXRLAaR0GMxTxV16jTDLKsQ2RdTbDpxjeMeFNF1hMSxSTNTd4ii8He6dIub6QOvpf+uNo0k0YLB0LIBIsEv0gAG4AP+HAeaq0hD6ZIombuwZDYAgki1gLje1/nbGCtnoP+2mgp5Ch/wBR116bnzHuIxvFGmkNWVVtYcC4YSA7bbtYnm+2++/xir6dBl6vBIJ51sJJFc6rjY8fAb+W/OOqOrnqJZytTDFKt7BEsj7XB336cY2mfOoX2gKjg2LxppduvwF74k2VWZJAkbTVNZlxmI0ldYa9iNzYi3l88RV8lPV1VPHRXV2IX2bQdLb/AFSbA7/4RiSp7QxENHG1TexAPeLa9+ny/E4LydaamjMyyRzPMNTStclQQbjceY555J4w/oyWSslp1halZ6MDUrUcqsL8XW/W+23PG/SAZNL3T1IqzRWQskE6hG2PPGwOkk7fhhgksU1PqmpodDsLBJVudyeDc87bj8txsxn9tL08mspI4LSJIdl24vsbm/W23TCVmk0lUY5gKyVhInhe5DLb0YE8G/447GakTOYUDxuLsutluOtzYX8/646/6fectLQzJo7zZZDoso63PP8AMeu2A3y3uqlYvbadrgktESyp03O3l+WN/wCUHUUlTWyHvnWOFGEyfRi7EWHPAAAHXyGH1CzrUVHtFO0caBrx7uJCbbk+lt9thbzwFlkv6ugW0iuy6/DuBYW3ta+5HT5eTKiStaOSpjLrrYXMy3kYcDSOhtbpjnyuiGerNTqloTG9ObCQNMVjC6ep2seBYeR9cFx1H/bJJVvaEtv3cgZLA2sLC/Ub+XXCGsrJaaB6RsvpP9QmVxbTq5Opdxfjbe3yA6NasVLTzU7NNaMqurZTe3hO4JNrDa/PW1sPFTuny7J6RUlqJBNpIWIkbarf8eux9fIHC6ItS5kDVtMZNJaJ4YxZhYC5udTWGrk77WGA/aDTwu7OUmk4V1JCC+66hyNr+754YZVU9xrnmURzJfVNIVc6ja4W29t7cHpviZYA5DmckcKEbqjEzO+xS++9/CdveB78SzZgtPoo54Y5n2fSpfREBxtY8b22I452OGjV0eYanqI+/j1BZGMTGM3BFhYbbc3HPHGEuc0+nMIqsVMgqhIEBLWZr7ed9ieoFxttbCd3KMkzmN6sK6d9O0eiJViWQLfgXI1H3A28vPEk+qqMddmNQ8aAgGErrsStgAoPg5vv54YUVP3IlOZNDBXSjSk8Y+lJN+R7rbeh3xEaL2xmkIp2qI1/1EUtdtJCi17A7g29fTaWwAyNEWeCkmnjqAT3ffSOQLXBDagRfnjyvfAlfmsiu1NUSrpFmEhXV3o9PIb7bfnh8tGk0XeZlTz3AU90WBO9yBYA8jTbfe5HS+If+nYo6VKiKRUp0J71y4buhwQT1+yPgcPKGF9RklTIaequk9wF7vWFsPNjtY/PfDWUZEz0/wCrIH9oTUHml1DcAjw3tffi1t+R0wFUzrQ1zhmczgjSiLZLjbj37/5fEmZ1U9GKUyGCKKdCyhV1Mu/1Om177+/4XjeV9L0YfrCrXwho2A21NUWJ9TjMBquaOoZa5LMLi9TGPw07Y3i+PP8ASdFc0kyQGcski30sI9wdrWZib8EG2/J4xlDBST1Cu+TrGCCA3eMAdjckHbpjjL6SKJ5Gcwz+C2pz4Sbjcggn42+XOJFo5JaaRag90gsYpg4bxFrgC1ri9/di9NOKiry9Kh1qqeRGBILL4W42vt+fxtxjpKjKGjjWPLYpJHW27yAodvPYm+9sQT5YRNHHSxSurAd5Kz3N733U23t7um/m2yqhyrLVeomqhJLGxW5juAQtyBe4J+G2FxDDL6YyRBJaUQxqugoANLKbE3vsLXB4H8sA1TwQSpHUQRKth3epQV1XNyQpA5tvb5jGS5olSjOkocNumiLQ6sLX552a3H9hYTWGNSkPeRyq3gct4wDb3gcfLGZKXENZRmT/ALhcyoLkadIJVCeLEgDw+8+WAoJKR6mxidZGa2uByw9dN7i3PIPOGWbSQwVEemmjiaNLltHiY9SbfkcByZq7RlFSDYWv3NwfgdsdJGUtTU6iKKhSUre0hsxLHfnUPD15txiKgjoEmOmTW62IUW5t0IJ2tt/S+GuSyLM1p52QsLlI6W/hFrEC4BG9/wD3iyU2Q5dXwLphrlBcM0gQoJgPs8G3nvjc+PUvORXqGvaOFnXLbCOMML3Q+ekBtx5X4OIy89RA89ZLOmo6lhgXxKD8rXHvPF/T0GHszkcsAPczhbWIeRlt8P7Y6bstkYUF45Ao6mQ7fji/81+mPycVGMRq4w5SCKFY7xwvdQ11Nwx5PNz7hbAdcUpGhjo6COaAsSzrEdQF+l7A8k9Pli15pSZDRi0EIkN9y7sR8r4SSZi2spQ0WXxIPttF3pPxPGL/AM9+1/JPpAoAb2n2KIuSpkZyQ5TaxC/I7A9fiPF2dmgWaripTVlheHvW0uAb3ut7lhb0/qxhzLOblI6oSO2wjWBVRffYX592AKiftAspeSszOIHUT3akDY9BcfliX4c+zzELXx5bRxQ0MJiA2ki3aSNio2O/PHutyOu5Kiqas7/L9cVQq7xTR8i9robDz5/kNl8UmYyV0MVLmOZMr3DidQ+g6SbnpYc+fOOKjPM2plkgaWDV4lvo7twbm9reEdTxjnfirU5aYUs8jPGc1YpWOwTu1iDk3Fr+Qv7vhg6ilhrJVjnaITRITI8aN3ZU7ckA/K444tsgyCpo6OQLUrNTVDMXieUgxMTbbULCxFj5bc74sVbNHJT1IjmmgM76dJ8LJbc6SBvte1j+WOPKWVuCq7LmLRytHBMLowmZQFC2a3h5J9R0tiesqoYe5hR7tqv3LKHL6t7b9L35GF5rKmOOGOOaMrpRXZpFBXi+kja/4betsL8xq6553my9GIZVRmmAKyIN9+LfIfDgYzVWFpKXMp4Kmqjl7+K5SIFho3sRYbenlztgCakyqrplhjjDVKIUuzM11YEsrMeu+r3jbFWlrAZXlepmSQ89ypAI+7/7v64mjziUThcrDyEau9Eu3n4mbrt5/jjc436SWH/6gytfCtTIqjYL7TJsPLGYr57X1kZKSK2tdm8S8/LGYf7XYYVuahBMjSGnQR6fpEJt+yPd57Xv6YApVM9MiwVsDgi5AqdNhcdCL224t7vQeoiqZI9clE0iEAue7be97W3B8+PLFm7GdiFzeiWSpSrpUUn6TWQXXoAOAfXf+nSSLYUxUkyG8Xs7MWv9MysSb9QeDby+eHubrRQUa+20kEM3mm4aw2sCbc/li85Z2FySgK/Q1FQ6D6081/8Aja2Cazs5k1NTy1FVDUpEh1ELVygfAA8+gxr8cZ8q8kppKKCLV9AXF7tEnia979Tbm1vQcWxzNmndR/8AbxhATa7849SyjKez2bxSewGvGjlRmEnF7XFmIPz6jzFyqzsTlNYg9r/WThfEA1a7WPpqvjfjjFmvGRT1Oad4PaKaMkjV7TLov7sdns+lJTiSerp5Z7hQsMwax388eyUXYPKKWIwxe0+d5Qkx+bqTglOxNFqGju+f/JRxH8lGLImV5rkWW0604NX7TUElS0axlWRb35bk7dN7H1xbv1hlpmWMz2niUfRSSEOL7/VuPyxMv6MzR58czirxLTsLGjmi1x268tt8tuMb7RdkqWtpdEWWRQMvElPIUcDrswIIx14coxy4B6vMoaZdbtufq7YQtJnGcuyZbSySLe3eAWUfHgYZ9nuyVPS5hTzIMymWJizJKIu7PoRot8OcejCyIqItlt9UADTjpeeemJweaUH6O6qoPe5tWCMnlIhqb58YeUvYTIKZdc9O9Y3H/cuSv+0eH8MWpscFbgjGLa6SSPMe0detPW5pNSQxLHTgUyxJELAAAk2G/JY3t5Yo1b2qzmCqKpU2isHjbuxcqd97/L4Y9W7R9lpap6qqoUpZJKjSZoak+FyBa6kcGwA4PGPK82yjMMvo5Y8wylqeSPwRyICY9JJOzbg9eo5GM8710k4/sZQZzVz1fdnuO+FpE0QBLSr4hv1v4h8RjntfSxLOk9OCtPUxh042BG34eH+E4TQ5vSU8xqlaX2nUBp+zt15xZ65Vruzkgi29klDpYbiKRe8Q/A6l+OOcu9F6qpo0lOrpEyMnMkE31D8DjoENT6KYSGJFLPSMSWjuPrL94f2xJ3STRKDTd4Aeddt+m2I5aV45BN3zrIG8B4K+RubHGbGtH0wqaiWOr79O4lBWFdWqRBcXIAA36beZwLmkdSk0OW0zRp3rk6FYErfkbHjb37DHMVe0LmenQLOQ3exBLpIQPrr0v5jEYpZZ6+SeVe4kbxFYx9S425998Z8e25YM/V+aSUcMEVVTGCxWM94LMtrG4O+1vLB2WQ02TQtTVbse8sWkZPDrNiEHrz78K6dIKF2ENaQpVS7nZZEN722ItyLb74c0vZ+szrxRLVyRIPop5vqG3lbYX46Y58pfV9NdIZaXswkrpJPKHViGDOb39cZgxoDAxhNXlimM6dNuLbeeMxMBTU9TI6xSZlpWRgFmcL9GOpY8beuDB2pz/L4Z5F7U5NVCJiohnRRIQPILa/44i7GUVJ2nzAQOrtT0q6iqsVBvwb9Df52J5xdf/wAddmZZe8ly9y973aok3/HG+E5Ou/H4/eueyHbd85ywPW0M6VS3LpT0zSIfIix2/scMqjtPRmMQZjBVQpICJL0swK2+74dz67WxY8voKKgpUTL6eOGG31UA3wuzejpquqZqpElSJERY2QEMzksRwd7KvljvI4c7N69EWUZ9kmWoBTtUvIzkN3sEx0Kx1Gx7sDk8bdPIWexdrcrkdgasIotpZo5Bf4FcC1WR5ZqVZ6RWDE/QqpCELwADsRYA+lgMFdncqiy6fMYoRGsccqRju0CDaMHgX6sb+uLmJP6CzTt9QUkvc0cMldLbWe6VrW9+m5+AwOO2+ctFri7OPotq1d+BYeosMNO0vZ+mzxEQMYKqHeKoQXaL0PmPTCb/AKLrViIkr6WSw8ZaMoD7xc443lyle/hw/wDPy+OW8sv9lczds86DQxvkVOhm/wBMS1q7/C+N1+bdpYKdKhMgpHDW+keo1Xa19rsCOvTHVJ2QzAyColWmkZVAhUswMa/7eep/tjvMcj7UjQcvkWMRAd0onBF7WubjyJGHn/E/H8d9coQzdt+0tPM0NRktGrgDbX+Vicdp22z9x/8AqKYepmIt+OCM3kzPO8w/Vz0aUWdwRJI7mRQhUmxYHcsOh9bcYaZf2VhpwxzCpkrHY6irG0frt1x6eNmPFc9OOyPax+0MtRE9G0bxAN3sZ1ROLkbNbn57b3xY2Ox8OIwkcKqkSBAosFUWAGJUfEYCsyE2PH7v9MRySwRxmTvUh4F5Lr16bb4KqWijW7Oq38+cCGdDsh1XwEatllWzlTBOEsD4Qf8ANsQTZPkUyOr0GXsWtqPcxgsBxvbBgbGYBHL2O7OTcZfCpP8A9Tsv4KRjmLsVldNq9njngJY3swLE+9gT0w8KJ1VcDrR00chdIlDHr54mCqTfowy81Ms3ttbpc6+6UoAT8tsLMr7IxwVlVBnQnNMsojja1llXSpPI3Fzb3Lj0Hu06p/yxxOiOmh9RW3GrDpYrWZ/o2yWsmjqoFbu0VQkcb2VVBvttzvhdmlIsMS5bBFmcphspZ5CLJvwVXgDjgX2PTF3q6+lyPKnqJnPdpsL3bbiwA592KeM8pu00E2YZS08dXTExzwyqEfQfQe7bny2xmyRYOg/R/SvDG65WullBFr8W/fH5YzFeHbGgkAcSIobfSZwCPS3TGY5eUbWn9GVJDB2fWseONKqsZpJ3QWBN7D8vxPni31kwhjMiwyTafsRC7fDFV7ALVDsxRe2Q9xKpdSlraRqNtvdbFrjOOkvSUBD2gSJiHo8zi/fopCPwBvgCtm7N1lWK2tDpUhdIkcSx2FrcbW2xYgcdhsVMVd4+y1Qun9ZRr+7UgH4HkYb5VWZVRUQpaXMoXFy2uSoDMxJ5JvvhgwR/roje/ET0lG/1qWAnzaMf0wMQzv7YFFBm6U77/VMb6t/X/N8M6WF1gQVEveMPrNYJqPuGIadYqVdFOiRod9KADf4YlEzfexGry2YMVr7LwMY7WUn0wOs37WIamZt/FgyrXbyNoY4M9oVLVmVt3mkf+WE7SJ6+G5HuwfDVRVlPHUwSB4ZEDow4YHcfgcE9z7RqVwCrCxB4IwqyzLIsky6PL4KiSWGMnQzcqpJIS/UDi/oMbiGDPdQPPG+8jihMhF2GwHngf+Jjiv8AbfMGosnZIJyk9QRDG211JHibjkKCffbDUxVe1XbCuqaqanyWVY0iYrJVlQwLXtZAegO1z/7Wdnu3GY0eaR0XaJ1npZzZaiNACl+uwAsOu22KtWuameSkgusMGlLLxrLBf54ni7qhzURq1oO8ZNJ+wAdN/n/PEtXHucM7RHu2GoqN/liT2pfu4TZXI02UULl7siGJv2tJtf5AH44K1Y1PTNMBOpNsdF7/AFeMLQ2NmS2APOIpDfYfhgTv2+9jRqG6/hgsUP8ASxnNStTQZZSnYJ3rkJfxEkL8dm/DCXsfnb5fn6CoIaOdTTmUbdQQbddxb3H1wL2urXrO0WYOssZVXESq37O1/nq+eF8MLNUqQ0OgNpWzAG4vwAdsYreacVEsqzyKMro2AcgNp53xrEkmU9oZZGkXJSVclhfVff4YzHHW/E/yL9JWXLMhr566ljCnUixKyMejeY/tgub9LsCVRWlojJT6jpkZ0DMP3dQt54q1TkNOMuWSiqIxMrOJaR7nvFNirAi4uDfba3nbCSDstMY2aWdI3DWCgX/I46SSdROVvL29Qp/0s0j/AOrllUD5oLg/InBsX6U8j/8AkR1EX70b7f8AHHkD9lKpDqSaBvfcHCYPUQM0ZeSJkJBAci3+cYrD6Ei/SP2Zm/8AnBP3io/MjB8HbHs/OLxZlGw/ZBP5Xx82itnUW9pc+jEn88Z7VI27CJv3o1P8sB9RwZzl0zqkdbEXbgEkE/O2ChUR3/1V/wB2Pl3L82qKGQPEqRrfxFRbfz+GLhB+lPtVF4S9DJ5F4f5k4D3Fcwow+n22DV93vBf88SGZD4kKyeoN8eFVfbXNc7IlzPJcsqhEtlJhGvTffje18G9lu2EVFmRZcop6ZiO7eGN3UldtxvYnby/O+E9umcPF69NOx24v0GBXbEFHmEGY0sdXRyCSJgfn5emOmkH2jpONOSVWHW9vTFA/SBV3zBY2JC01Pq9Azsb/AIIPni1ZxnlBk0QfMKgRg8La7H+HHmvafNIMzetraOUmGR9Kkg3sEUbg/H54UioRrJG0czgCZnWQK3BXYg3H5eowYgeqnmdIjpPiLsvCqB+J5NupOBqGB5gkYkPesRr1bgDoLf5yMNso9grqyoqKtDJJIv0elCY472AHo3vxPpXpPZRnbszRd59Zixb33I/liwU8IYXJsMeSRdtKrK6uko1RHooLd7pBDsWGpt79C1vhhxUfpGIF6XKwR9+oYf0P54sskTxtekGCP/7FPuOOTSr01H+E/wA8eUVP6Tc3a6xyUsC220DUfwwmrO3WdVN9WZVBB5C2jB+IxfI8Xtb0qDdyF/ecD8sIc/z6hyZY0jUVdRJ9WCFr2Hmx6Y8cnzuuqG8Ujtf78jOfxNsZFDnNWPD34TzvoH8sZ1rJ9idRjkLCNpZhMWZ2UsQSb3/Ee+5wwy7TTUckjSCR5k0IzoA6Nfj3A9PfjimyvNBF3dkbr4nv/LBKZDUTSLJVyk6eETYDEtIt8WcVqxIv6wqXsoGru+fXGYTLSyKoA7ywFsZjPjxb8uSH2mVTtjiSrcfXXEmlmHMa45NOzb6lwTC2ozuVDojgJHmRa34Yr2ZVTVkhlkg0yHYsFti4Gj1fbXEb0KfalXF1MUJhjQFiCOmL02W0pBDBWv8As4FkyWnk2VVW3QLhp4qo1ROyhTK5A4GrYY5WWUG+tsWKXIYL/Xdf3cDyZGL+Gc/xJfDYllSx5pljUFFJItSuYUsbRtpUFJl309QVPiN+b/HC2qzNpJzJHAsJBBFr3X8cTSZLNfwOrfC2IJMrqIvrITf7niP9sXTsZS9qMwpwNDADyQlfjzg+Lt7m8Qssstv/AOxwh/V9TY6oJLeuNpllU/1YGw1ZoqpzX9ZTmeuNRNKeuu9vwwZRMJstq9AZQuljq9bg/lhfHkuYggpAN/vMP64c0UFbS0jQ+yB1YeLTJ9b5j3Ylp7RZfYUzOkX0tOll/fZxv+WOKioWhy+RIfB3iqoS/wBV7WO/4ny288SLlWZSP9FShUHViP5HBUXZuomkElYe8t9iNbJ88XUyqrEalhpiMu5udN9z8MFU2TV1U1+70/tSN/hxeKbLDCgUIoUcDywUtOyeuI1ip0vZKRrGaoC+ir/M4Zw9lqWPdlMhH3zt/LDsJL9nw+mOgJPtar4AOlyqngsFghHpYDBy0yp9WCO3uvjQMn3sbtJ97DFdFXt4Yo/9owO5kv8AVU+mkbYJAk+//wAsdfSDe2rFAOqT7uN4Ls33WxmCO2plXbTjg06/dPwxuR0QC8m2Imlkf6jgL01Yzi609PsbIW9WwM9PP9lL+mJj31/rEeq9cSrDIwuWBHk2GANYidiVDDlcYkLFiDwcGiD1VcSRrpJs1/TDACadW8Pi2xi0kXXnDBIg7HVv6eWNSRK3h04YFhplAUaNXO+OkpYuq7YOWLSbYwCXUQqbDDBDFR0vVNsELR0Vv9LEMizv/wCO38WORTn7X9cMNE+y0nSPf97G+7gXbT8scRR6ft2xMF9dWGLrQjg/z/1jCQo+ja/kMdaHOyuij9psaWNlJGot/Fti4B5HnO1wv72OB34+0v8AtwYIsaMQBuG3HGDOBV79WLavyx39IwJbnExjlO+rGBD9q38WKBSJMaIk+7g5o7AHb+HHJib6r6rHcYGAQzfdXEqu33cSPDsfrYiFO1x4m+OA714zGezyfeXGsBCZCQRf/PljrWqsoVLsepxvGYipNEg30rvjDIDs5UW6C+NYzAdK8Vx9bHMkgc3GsDi98axmCJEC22Yt6nGiSCDqON4zBXWtW+vIb+7G+8VdgzXxmMwGmkHRiD1xozavCZGtjMZio13ituGv03XGixVAAb78YzGYDAGXcra/k2O1mKjbG8ZgOom1k22J5xuY6XtztzjMZgrSDvNucY23hEdj56sZjMBxZr7nGnABsguP543jMERlT933+L+2ObH+LpjWMwGaE6k3xmMxmA//2Q==",
            cost: 12000,
            name: 'Toyota Camry',
            year: 2018,
            milage: 44300,
            cost_type: 'upgrade',
            second_cost: 31000,
            description: 'Very best auto',
        },
        {
            id: 3,
            category_id: 1,
            image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgVFhYZGBgYGhgYGBgaHBoaGhgcGBgZGRoaGBgcIS4lHB4rIRgYJjgmLC8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QGhISHjQhISE0NDQ0NDQxNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0MTQ0NDQ0ND80NDE0NP/AABEIAMIBAwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAECBAUGB//EAEEQAAIBAQUEBggEBAYCAwAAAAECABEDBBIhMQVBUWETcYGRofAGFCIyUrHB0RVCYuFygpLCFiNTorLxB0NEc9L/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EAB4RAQEBAQEBAQEBAQEAAAAAAAABERICITFRIkED/9oADAMBAAIRAxEAPwDRFuI4thAVj4pOYdVY6URxaiV8UWKOTqrPSCLphK+OLHJi9VYFsIhbDjK9ZLFGHVH6UcY/SDjK+KODHK9UfpBxj9IOMr15R6jgIw6o4ccY+KV6jhFUSYdVZxRYpWy4R8oxeljFHrK4pHy8mMOh6xVgQ0evOTF6FrHrAYeZiw8zGHQ9Y9ZXw/qMYpzMcxeqs1irK/R/qMWA/FHMOqsYosUAEPxSWFuIkxeqNiixQQBiwnjGHVFxR8UDn5BiqfIMnK9DYo0FjPHwMUcnTnPXn5d0kt/bgJQzjgmenHlaPr54CL8Q/T4zPxGPSMg0BtAfD4yXr4+HxmcoERMZDa0fxD9PjG9fPwiZ9Y4MZDa0BtD9PjHO0B8PjM6scVjIbWh+Ifp8YvxEcD3ygFMYKYyG1o+vj4T3xevjgZQCxUjIbWh68OB8IvXxwPhM+kVY5h00DtAfCe+ONoD4T3zOMRaOYdVofiI+Ex/xEcDM4ERVjmHVaP4iOB8I52kODeEzKxUjmHVaf4kvBvD7xfia8G8PvMwyAaTmHVa/4kvA+ER2mOBmVWSpHMO60vxX9J7442r+nxmXHpHMXutT8VHAxDai8DMukQEcw6rV/Ek4GIbTT4TMqkfDHMOq1fxJOBimVSKOYvVCiEhjPCLGeE1jGiUjiJHHAyRdefdJi6gBJARYxwMfFyMYbDYJErJYjwjqsCAEmFiNBCK4pAYSVBJih0MiV6oaIKu+vfJ9GnEiDKxBIZE6FPiMf1YfFILJYoXDm6/q8IxuZ+IRYxFj4Vk1MR9VPESJup4iGFsR/wBSXrHIRpisbseUb1duEt+schHFsI0xS9XbhG6BuE0Ma8Y+EfF4xpjO6BuEY2DcJpCz4GLAeMaYzOibhF0bcDNPAeMcIZdMZeBuBkip5zSCGP0caYzCsYVmn0Zi6LlGpjNqYpp9ByEUaYy8o4AggrcRJFm4Dxl+nxMKJJVEHjbgI6ufh8ZPq/B1w8JLGvCVukb4RHNeHjH0+DlwdI1YDGRu8Y62nLxEfT4KWjq0CX5R1ceRH1fgxcx0tDBi0EiG5SYbFrpW4wZYnWRUc5XttoohwA4m1wrnQcWP5fNKyqt4ZJLIsaKpJ5An5Sgu3UTMoznnp3Vz85RP6aPSgGEcAAB3CTPRsaybKtW0s27aD/lCrsS24AdbrOaf0tc7zB/4mPE/7pM9Gz+OsGwbTin9Y+0l/h9/iT+ofacmPSTmf6m+8IvpH+o/1Rzf6bP46c+j7/p7HEg+wLXctepk+8wk9Ij8bd4liz9Iz8Zkz0b5aL7Ith/637AD8pWtLu6+8jjrUj6Sdl6Sn4z8pesfSkjt7SY/1F/yyQw5+EYWrcTOg/FTaD27NKfrUEmBc3VveCof0kr4HLwk6/q8/wAY62zcTCreiNaGabbEVxWwtA36WIB7CPqBMi2snRirqVYbjkZZ6l/GbLB/Wf0xLeTwlakmE5TWC0l57IZb0PIlHujjqjBo9MvERpRwnzSKTBRCR8MizxB5tg+GKkYGKBILFhkRJK0IcJJBY4j1hUcPKSw8oukg7S8hQWY0AFTvPIAbzAKEkbRgoLMaAamZFn6Q2bFhR1CipY0K8hlTMzDvd9e9NTNbIGlBqx4czJq4vX3a7WxKWJwoMmtDr1IOMNcrmcNB7K61ObMeJJ1PMwtw2eFALDTRdw6+Jh7xfUQGrCvDU+GkuMevW/Iz9pOqewuurHU8hWVtn2eNwNw9o9Q/ekpW1qWJY6k1hbpfWswcNAWpnQHTr64MuD7boHwqq0UCoApmc86a5UmXnwhbe2LMWY1J1MHWGokq56dmskacJHFGrAmqrXhHwcGIkBJdIdKwJdI65451XordWtDiIqa0HnhqZyDmpC8TPVvQ254LLERmch20J/t7jMe7ka8tm7bOQCjKGJFCSPADcJY2Z7JKHdUjsyP0PaZPGFBZiAAKknIADUknSZlrt27K+IW9mcJStHBzfEuGoyJKg5cp57XWRs3nZVm4JwhX3OvsuDuNRrTgcpmXmyDIi3nNG9hLcUDWb1w4LTrbINoTwJFehQyleHStrZWlCjqGKnPEHBR1w7x7Nf5jOd9tzy4y/wCzHsXwtofdbcw5c+UrhCN86TZN1a1sXu16XGiuwsXJ9t0B/wAtiRmjgUzyMrX/AGA1mMSjGo37xzInp8f+m/PX65+vH/YxxSOGEsIgpUgZedZj370ju6EqFLkZEqBhHHM6zprn9aGKKZX+JrH/AE7T+kfeKXYZThxGDwdYgZWRcXKP0kCBJAQDYhHD8oMAyaJAJWOFk0Q8JIpxMgFhEpbZ2ba2qKEqAGxHSpFDmv6s6Ddmazbu9mozpnxMtYxJasjzK22ZblgrWLogzIC1LdZXVjx3bpcs72lmaBChAooYH2RxFftPQcYgrzdrO0XDaIrjgwB7q6RuLZK86vG0C+rmnDQd0qFwd89A/wANXbPCrJXUA4h/S4ZR2CI+it3OvyUHwEupy4DATF0ZnbWnoXYHRiO/7yq/oQPy2h7yPoY2JlcmUjYJ0r+hdoPdtPEH5wDeiN43Op7B95dMrn8BiFmZtP6L3kbkPaRBN6P3of8ArB6mH1j4ZWUymORNE7HvI/8AjseplP1gn2PeM62LoN5YZdQOkaYjsW79JbAbh8hmTOtPp6tlSySwJCau7YQa51VFBJBrUAkZcJzaWZu93tXYUYgWanmxz/2hpg3xjRHwkK6gA6VKAA047s5z9SW/W58ja2ttJ702J7zUbkZXRBTSioGGXE1POS2Z6O3i2VlUpgbDVwysuWlAvtVzOVAZgWFqp/KxJNBhA14Ctansnc+hJt1tCejaysVUm0e0BBb2ThALAAZmvsjQZ6xZJPizdd3c2t1s1S0tixFasAFY1JNDTOg01ByzrJpaKugrxPHr5zIvu3rtZp0j2ykNUBV9p2KnCaIM9cqmgynJbR9O3aq3dAg+N6O/Yvur/unKec/I3fT0h9oBWRCGLOaKApO8e0aaKK6w+0PSSwuo/wA20AYglVFWJAFa0UEzxYbWvDsXtSbbLJbUuyDmEDBTroQRAXCx6ZmV7UKwRmVrQnCzDRC35Ca5HTKL50nrHoG2na2JVGwo1HqooSGJpypQeMy7PYiDMqD1rU6cYbY1mUrZ4i+EUB5A0FOU0SOVO2dGWJ+AWXwnz1GKbPb8opRkBYRUgzbgcT2RC88vlSb6jnzRgI4BlY3r9MQvTHIanIDiTwG+Ooc1cEt3K5u/uLl8RyUdv2lZXCEB6M+pTcvAMd55fPdX2tt12HRIaZUYjKg+EU0j7fwyT9W73elQ4EbGwyZx7gPBfi69I1k+8nOY1i9BCG9SyGtv1oCRN7mIbzIm8xhrb9b5xeu03zAa+cJAXiMNdGL/ACYvx4znVvEILxLhroBf5IX+c+LxJC8RhroRtCSF+JmHZvWWDeETN2py1J7JMNa6XgmEe2VBV2Cjnv6hvnOWm13OSLhHxHNu7QeMHZWTMcTEk8Saxg232tXKzX+Zvov3j2Fk9owxEknwG/LdI3C4FtMhxnTXK6BBkM+O8zNuLI4X/wAh3QpYWeEZF2JNPzBar4Y5xexNh298ZghBwAE42YD2jQAEA55HunqHpVt+5orWVrS2ffZJQkEaYm0Q58a8p59ffSG1cGzsVW72VT7FiMFebuM2PcOUxrbuW2rdrjZJZO6s6Iq4LP2mJVaEkVotTU+0RrOZ2p6aWlucC2aLZE+0rL0rNTMFqkDIgGg3jfOZs7tx7h95YSg0ESGrO0ry1vgVmPR2a4UXCiAVzbCieyqkgZZnIVNYJEUaCMSY4aVEy8He7q4sjaKcIDZ0GpPFtByG+Rds+qSsLQsHxMcAU0XShNcXebMyjpfRK3NoisaZKVPY37zoTZnl35znPQlStgT+pgKfxTpQ/ESKFgbj8o0lj/T574oHPFWkKSWA74xXdlIIg9/VOn2Rsc+q215UDpEHsA6qooWZRxw1NZzajs8850noxeWY2d5a0Is1Q3Z1G5g5NnjQZOChwjf7UW59S1yT2xUFyc9OsnSVEamZ1M0fSxbGxt3s0daK5ouIVTih/hOJeyY62mLQg9RB+U7ebK53Ysm3HGRa3lVyd4METKi2beDa8SVv0IsxhdjaGlRoo0qDUdeh4dlAGFXFtIRbSUQ0kHkF0WskLaUcccPA0FtYVbYLmTMrp+EWInMxqtN9osck9kcd/wC0ih3k9plAMYWxNTlnyWrHuWsaNawfhOg2bdq5tMK5WdCKq39LeOWU3Bb0XKZo6jZyqchMD/yVtm1uyWdjZHAbVXLuDRwqlRhU/lrU1Izy3Tn776ZPYErZYcQyZ3qVU8FUe83gJk7S9KrW+ollbOrBHxg9GqtoR+XdQzn6l10jJud1Vqs7YVArQCrPXco0HWY65Cgh7Zc5XJlRICFSBjoYBso1ZEvnIu+XGUDvD5HzxP2lo2DYQrFbPEKs1oypUrnRVBxGrD3qUFTKFmQXQMCVLDGBqVLAMBzoDNjatvZhbPCmIIArqxJwkigKOfaBIFWXNamoFawjb9ElpYfzvv4Md+/Ob7NTKvnqmDs1ylmijcqim45DfLZtz5+8KvY+Y7h9opQ9a/THgVGTdQ9dRx64zaaHwiZc8q16/PODavGnaPCQTtjQCpoGIXdvNIrPaNrdjaPZFejVVLo/ukoR0bKN7g0p46TH2veAuAlyueJSBioy4SMVDpzz6pX2htLpEVSo/MWINVbKgw+PVWEZxubWntvaKruSzdIHTExJOT4SprrqIzbEt6Ylsy6/FZlbUd6E07ZXs7R7MnCzKOKkjvAliyvpqGKISMwwBs27DZlc+sGX4fVU2topoWZSNxLDwMvXNrZwWxIqA0L2mFVrStAaVJpuFTLibcamFrS1pX3bQWd5Ujh7YUgQG0B0rIVNkqlTVkXo7NWqQSVpk1Alaay/ge+ra2YxMlm6EkY0OJaj8pYH2TyIBlP19TqpHU1fmJq3a2w27hcL2N4LKwOaEEFgGAzVlO/UaiNtHZV36RsAvNkoJADWOMCmWTB6kc42pkZovafqHWB9DJi8JucdoI+ka12dZDS8qOT2dqv/ABVo9jsQvXBbWLUFTRnFBxOJBQS7TIIoLZqQRyNYlQllWhqxoKggE8iRnBfhlrZsKNZg/wD3WQqOpmFRNC43lbQGztMmrkRTUb1OmIGNMdBaehNpZYfWLWysMWgdquTwRExM3cJfuvo5dgoel6vAqRiVFu9nkaGr2xxUB4CaOxNu4wjWjIl7u3us5wpb2VCuIEkVZQxBWtSCd9DLVhtOxs7utlb3tTV7W0Z7NWV0Z2L4ELijjGSA69XOcfV9LkZe2bF7mwVNnXdCQSrWpe8s1PgxUWv8s6e5bIFpZJaXu+PgZFcWCYLuB7Ir7CAHJjSlZ556QbV6d1wWlu6qioOkPRr7NBUUJYk4RU0FamYO0L5aKqoWyzailgKmgNQScWgzas1Jf1lqbT9IOjDJYHDiZjiBDsFJOFekpUnDSpGVazn7O/WhYnGwJ95qmvXU7+cps2cuXC3FmQSPe9kMdEJ0fmV1HfqBNa1Jg7XXD74QcFd1DZ55qTVf5qSle7tgNVBUihZTuroQd6n6jXdKwU9JS00GJmH8NS1e49cOW9kYjV3x2nIKScQHAEYz1qOJqUbpMSqeUr1krP2UAO6o7soIQCVjk6efCJUJIFDUmgAFWJ4BfPbOquHopgTpr44u9lwJHSPyOWX8IBPISWjnblc3tHwIjO3woK9rHQDn8pp7S2E1ilbzb2djlVUWr2jdSCnfXrMu370qCL0Nws+hTfaEf5j7qgGuHrNT1TlX2e7sWZmZjmWJJLHmTqZPqqxtvaDDdoeNDUEjd1ZzSsbk7IpYHDaWlcXxMURiRx1Y5aSKbAY/np1ibOzNmLZUJJY560oK0rRd0qLyDjl2Zd8OLPfUbq1giafXhr514SWM8aSglDxWKRx14RQAuRlU1PL7wZKHifOsF0g4a+fpI10zyp588oGdtwE9EVUEhwAp0JNCAeWUx2whmVgbNgToKqRuxL9R3Tp3u9naBlY5EZLXCcWoz3b/AAmK2z2o1WVrJNcWT2eYGGmoO6gNDrCKrWdAtSM6Z5gCuhqd2hzhDs/Ecns25q2nM7z4yhfLwXaug3CNdCA6kmgqKnhzl85b9L+fGp+AXgqHRC6GtCuYyJB4HUcIIB0VktbJihNSM1KtoGRiMjTLMEEdQI7XYt+swEZMDMqWgNXTFTHaMgw1xBvb0FQQdxAlnaFtags5bCjOlA1AFDCwDe2ykKg9vOmrNwmvUk9WT8jMtsmvPfWEQEWePE2RZ6KAOSrWpzOZOVdN8qWT4fdYg8iR8p6bbXdXSzbo7Jy9izUKAF3VAQcmAC1+eolC22XdyG/yKlFNQhezYv8A5vsBFx/6VK1PvVHA5xdcR65abrZ/62+8kL9af6rnrNfnNjb+zLGx6Mq5UOHrmzgFGC0qVBGddRumalzVvdtFY8K0PcYXYA17c6lGOmaWbHvKyGdamleQCgdigASVpZ4SQa1Go8mRLgbvn9plWrdXd0IfPC3snfpnmM9+vOESxANQM+O/tMyrPabKuFSAOoH5iMdpv8f+0TUsZsrbRDMnadoC5poKDu18ayHr7MKF/mPkJXpXQx69aefOEqaHdLC+2DZbyMSfxCtV/mUacQsHLdxubC1LMuFVocTbiQGXCPzMQQQO3ISNCJdWdS+Yxois591VULjau8kgCgqT7XGUUtsVoCMlxKoB3KKKAezXtnS29wQYlwYrwAT0NozrVCoZTYYWUWq61FQTSoU7sawvdSVaws1wspIAZWBLBRSrZa8IEcNVWppkM88zQVoN81NjbCtLcFxSzslritrQgKoGtCdT1dRMrbOtrJBjtENs4ACWZqqZAe1aNqw4IMjQ1OcLfr7bXkjpXqo9xFGFFpl7KDLIbzU85BsjbV2ugwXNOmtdDeLQeznrgXIkdVBpm0xLzaWt4fHauztuLaKOCqMlHIUhbtcD2TUsLDDTce8eBrGKpXbZ41p1eeE1bK7BR7tajhJ2fZStKiv0k2qBqO351pKiJQaU8frwkkG4Dvz8DJi1GgoTTkO6QepORyzJOdO8ZSokG3AA04mnjIHqp29e+m6PWv5t57omruZs8uIp1QI4hx8f2iiwdfdFAzwoArpoMj1d8DaEHed9RwhXXnv+ekCE1Ip9t++QBx08da6b9JUvQRiCy4iOsdlR1y21mNPIpxErWtgc9ANRXIEcoFG2uqNU1wndSrDtJJI7AZVa4n8rK3bQ9gNCe6X7Syld7Pt+UmqpWt1dfeUj69UnYX21s/ctHTqZl+UsLiX3WI6qj5RzatvwnrVa94FYBB6Q25ILMr0BHtojmhBBFWWtKE5V3mWrP0mYEVsbPIEDAbSz97FU+y1CfacgkVBYkUmaSp1sx/KSO/FikGs7Pg69VG8SRKmLO2tresYPYK4cZNWLli7YiSSK61mVSWzd03WlP4g1e2gI8YxuZ3Oh63UfMwqFnabj3/eFDU4doVh3MDGa4WgFSuW41yPUdDGwFcmy4cO+MRF7Yj4P6E//ADHS0Y6KD1Ih/tlxrRFUhHJY78RUA8lr85RZ3Or1/n/eME2Rz+Q9iAfJYNag0IIO8HIyLAnVgetqx0sidM/4QT8hIo+u+nPhzmrfrVlteleqrZmiJpiZT7qjctQKsc6UzqRM1rsQpLFV0ohIxNU0yUZgddIa+npVW0ZiSoVH34aCgqNwNKg8S0os3+/G2sVVhiw2SMhOZRkYWTBT8LKoYj4hXeagS8Wmas5eigEMAxUtkFVmBK0qDkfymRupOJCq1/y7QKKVzxWhHXTLulvZl2FQa1wmpbUOx1z3hQTnxJMA92uXGaVlcadfCHs/Z3VHV3SZap3jwPiM9KSKmlkR8ueeUIO6sCCdKjPL7Drhkz/bdv8AoZUSwZ1yqM/rJYTwH/fz/eMpyqKUPz7POcRY00r1ZwHdKjTTdl4dx74Nwa6dQ3/v+8kwBGKhrvy0ApqPOkjXOpqOB+4rnAi5pwPVv/eRapHLtpruhsdDllypryrGYGuQgA7oo+PyMMeBVca5cq60gnYVFag/vnu6pIDFnUaHz2568JIJppnX6U7JUCOWlOvfzkGQc9RpxpLWDgRpu108+MTWPL7wKZsRXTzppnWI3UUpQcOegl1hTce3vH1kAp506sjyFd0DMtbp1eHEd8A90OeXP5du8TaazO4DPf27vP0iFjvMYMBroaVp18eME92O+dIbAcMvvxPdA+qjU+ayYa5s2EgbuZ0pui7yP25RvUg3u0PHkfpGLrlzd+UWE6Vy55/OdEdnVFcvP/Rgzs3z28owc/0fV3CIWZ5dw+03Ds4xxsxtaSYMQI3ExmRzvPeZ0C7PPVDC4AfvSBy3qrSzdulVqoGBGVQNRwO4jkcp0q7PA1FNd2sKlzoeFez5dUDIsrvbuMLlUQ6qiqhI1oQgA36Hum1druiKFXdl38eusIEz/em6mf3k6ZZDzplAkBoN1ctddPvJqoI07euQBpu8+TJn7jhTlCmJ6uZ4du6ILThU7oqa7urr07hWRrwOfOuVIQQpv3+TJqa9elfI3xBNCe3LMco+Hr7qd5379JQq/Xhr1dsbI/UdesZzUAVoR9ct/KCepyOvGBJ0Iz3fPznpGwjdXsOXPvkWJp9t9eqMzV85a8RAJnw8f2ijqvmpilRXt/e88II6do/4iPFAZfv9ZZO7sjxSiLa9/wAjBv8A2j5iKKBESaat1/eKKQM/veecR93s+oiigNa/2mTGvYfnFFAez17PoIn0PnhGigO2o87xE2h87oooImND54yA0HZ/xEaKRRn+8A3vD+X5mKKAYe72SC+fGKKAez3dQg7TU/w/2xRQI10/iMLYfQf3RRQG3d/zWSs9R2fOKKBC190dS/KRGvf9IooCBzHV9Gjff7R4oA4oopUf/9k=",
            cost: 37300,
            name: 'Mercedes CLS',
            year: 2012,
            milage: 65100,
            cost_type: 'above',
            second_cost: 45000,
            description: 'Nice car'
        },
    ],
}
export default mockData;
