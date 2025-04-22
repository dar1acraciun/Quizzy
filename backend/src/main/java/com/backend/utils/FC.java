package com.backend.utils;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@ToString
@Getter
@Setter
@NoArgsConstructor
public class FC {
    private String question;
    private int level; // 0 - easy, 1 - medium, 2 - hard
    private FlashType type;
    private List<String> rightAnswers;
    private List<String> wrongAnswers;
}
